# YohDev Theme
## Folder Structure 

    ├─- backups                         # database files
    ├── config                          # php config 
    ├── plugins                         # wordpress plugins
    ├── themes                          # wordpress themes
        ├── twentytwentyone             # wordpress default theme
        ├── YohDevTheme                 # YohDev parent theme
        ├── YohDevChild                 # YohDev child theme
        └── index.php
    ├── uploads                         # wordpress uploads
    ├── .env                            # environment variables
    ├── .gitignore
    ├── README.md
    ├── docker-compose.prod.yml         # production .yml     
    ├── docker-compose.yml              # dev .yml
    ├── docker-dev-up.sh                # dev script
    ├── docker-down.sh                  # down containers
    ├── docker-prod-up.sh               # production script
    ├── export.sh                       # export db (data-$date-$branch.sql)
    ├── find_replace.sh                 # db find and replace
    ├── find_replace_elementor.sh       # elementor find and replace
    └── import.sh                       # import db
    
## Theme Folder Structure
    ├── YohDevTheme                     # YohDev parent theme
        ├── acf-json                    # acf fields
        ├── assets                      # environment variables
            ├── js                      # javascript files
            ├── lib                     # external libraries
            └── sass                    # style source files          
        ├── inc                         # php includes 
        ├── languages
        ├── template-parts              # content
        ├── vendor                      # composer
        ├── .eslintrc
        ├── .stylelintrc.json          
        ├── 404.php                     
        ├── comments.php
        ├── composer.json           
        ├── composer.lock                 
        ├── footer.php
        ├── functions.php         
        ├── header.php                  
        ├── package.json
        ├── page.php          
        ├── phpcs.xml.dist 
        ├── search.php                
        ├── sidebar.php
        ├── single.php         
        ├── style-rtl.css                
        └── style.css   
        
## .env
```
MYSQL_DATABASE=wordpress
MYSQL_ROOT_PASSWORD=password
MYSQL_USER=wordpress
MYSQL_PASSWORD=password
WORDPRESS_DB_HOST=db
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wordpress
WORDPRESS_DB_PASSWORD=password
db_container=YohDevTheme_db                           ## this changes ##
wp_container=YohDevTheme_wp                           ## this changes ##
wpcli_container=YohDevTheme_wpcli                     ## this changes ##
HOST_URL=http://localhost:8080
PROD_URL=http://yohdev-staging.yohdigital.net            ## this changes ##
VIRTUAL_PORT=8083                                        ## this changes ##
VIRTUAL_HOST=yohdev-staging.yohdigital.net               ## this changes ##
LETSENCRYPT_EMAIL=dev@yohdgital.com
LETSENCRYPT_HOST=yohdev-staging.yohdigital.net           ## this changes ##
```
## Theme Folder Structure
    ├── YohDevTheme                     # YohDev parent theme
        ├── acf-json                    # acf fields
        ├── assets                      # environment variables
            ├── js                      # javascript files
            ├── lib                     # external libraries
            └── sass                    # style source files          
        ├── inc                         # php includes 
        ├── languages
        ├── template-parts              # content
        ├── vendor                      # composer
        ├── .eslintrc
        ├── .stylelintrc.json          
        ├── 404.php                     
        ├── comments.php
        ├── composer.json           
        ├── composer.lock                 
        ├── footer.php
        ├── functions.php         
        ├── header.php                  
        ├── package.json
        ├── page.php          
        ├── phpcs.xml.dist 
        ├── search.php                
        ├── sidebar.php
        ├── single.php         
        ├── style-rtl.css                
        └── style.css   

## docker-compose.yml  
```
version: '3'

services:
  db:
    container_name: "${db_container}"
    image: mariadb:latest 
    volumes:
      - wp_data:/var/lib/mysql
    environment:
      MYSQL_DATABASE: "${MYSQL_DATABASE}"
      MYSQL_USER: "${MYSQL_USER}"
      MYSQL_PASSWORD: "${MYSQL_PASSWORD}"
      MYSQL_ROOT_PASSWORD: "${MYSQL_ROOT_PASSWORD}"
    restart: unless-stopped
    networks:
      - internal
  wp:
    container_name: "${wp_container}"
    image: wordpress:latest
    ports:
      - 8080:80                                                            ## Not in prod ##
    volumes:
      - ./config/php.conf.ini:/usr/local/etc/php/conf.d/conf.ini
      - ./plugins:/var/www/html/wp-content/plugins/ 
      - ./themes:/var/www/html/wp-content/themes/ 
      - ./uploads:/var/www/html/wp-content/uploads/ 
      - /var/www/html
    environment:
      WORDPRESS_DB_HOST: "${WORDPRESS_DB_HOST}"
      WORDPRESS_DB_NAME: "${WORDPRESS_DB_NAME}"
      WORDPRESS_DB_USER: "${WORDPRESS_DB_USER}"
      WORDPRESS_DB_PASSWORD: "${WORDPRESS_DB_PASSWORD}"
      WORDPRESS_CONFIG_EXTRA: |
                    define('WP_HOME', '${HOST_URL}');                      ## HOST_URL ##
                    define('WP_SITEURL', '${HOST_URL}');                   ## HOST_URL ##
    depends_on:
      - db
    restart: unless-stopped
    networks:
      - internal
  wpcli:
    container_name: "${wpcli_container}"
    image: wordpress:cli
    volumes_from:
     - wp
     - db
    volumes:
      - ./config/php.conf.ini:/usr/local/etc/php/conf.d/conf.ini
      - /var/www/html
    depends_on:
      - db
      - wp    
    networks:
      - internal
volumes:
  wp_data:
networks:
  internal:
    driver: bridge
```
## docker-compose.prod.yml
```
version: '3'

services:
  db:
    container_name: "${db_container}"
    image: mariadb:latest 
    volumes:
      - wp_data:/var/lib/mysql
    environment:
      MYSQL_DATABASE: "${MYSQL_DATABASE}"
      MYSQL_USER: "${MYSQL_USER}"
      MYSQL_PASSWORD: "${MYSQL_PASSWORD}"
      MYSQL_ROOT_PASSWORD: "${MYSQL_ROOT_PASSWORD}"
    restart: unless-stopped
    networks:
      - internal
  wp:
    container_name: "${wp_container}"
    image: wordpress:latest
    volumes:
      - ./config/php.conf.ini:/usr/local/etc/php/conf.d/conf.ini
      - ./plugins:/var/www/html/wp-content/plugins/ 
      - ./themes:/var/www/html/wp-content/themes/ 
      - ./uploads:/var/www/html/wp-content/uploads/
      - /var/www/html 
    environment: 
      VIRTUAL_PORT: "${VIRTUAL_PORT}"                                     ## VIRTUAL_PORT ##
      VIRTUAL_HOST: "${VIRTUAL_HOST}"                                     ## VIRTUAL_HOST ##
      LETSENCRYPT_EMAIL: "${LETSENCRYPT_EMAIL}"
      LETSENCRYPT_HOST: "${LETSENCRYPT_HOST}"
      WORDPRESS_DB_HOST: "${WORDPRESS_DB_HOST}"
      WORDPRESS_DB_NAME: "${WORDPRESS_DB_NAME}"
      WORDPRESS_DB_USER: "${WORDPRESS_DB_USER}"
      WORDPRESS_DB_PASSWORD: "${WORDPRESS_DB_PASSWORD}"
      WORDPRESS_CONFIG_EXTRA: |
                    define('WP_HOME', '${PROD_URL}');                     ## PROD_URL ##
                    define('WP_SITEURL', '${PROD_URL}');                  ## PROD_URL ##
    depends_on:
      - db
    restart: unless-stopped
    networks:
      - reverse-proxy
      - internal
  wpcli:
    container_name: "${wpcli_container}"
    image: wordpress:cli
    volumes_from:
     - wp
     - db
    volumes:
      - ./config/php.conf.ini:/usr/local/etc/php/conf.d/conf.ini
    depends_on:
      - db
      - wp
    networks:
      - internal    
volumes:
  wp_data:
networks:
  reverse-proxy:
    external:
      name: reverse-proxy
  internal:
    driver: bridge
```
---
## Starting a new project

Make sure you have the latest versions of **Docker** and **Docker Compose** installed on your machine.
Copy the files from this repository into a blank folder. In the **docker-compose.yml** file you may change the IP address (in case you run multiple containers) or the database from mysql to mariadb.

```
git clone git@github.com:yohdigitalagency/YohDevTheme.git
```
```
git checkout dev
```
---
# DEV
## Starting/Creating containers

Open a terminal and *cd* to the folder you have the docker-compose.yml and run:

```
./docker-dev-up.sh
```
The containers are now build and running. You should be able to access the Wordpress installation with the configured IP (http://localhost:8080) in the browser.

## Down/Remove containers
To stop and remove all the containers use the **down** script                             
It will ask if you want to remove volumes **[y/n]**
```
./docker-down.sh
```
---
## Importing database
This will ask which **file** you want to import and which **container**                                         
**Input takes number correlated to file and container.**
```
./import.sh
```
---
## Creating database dumps
The file name structure is data_$date_$branch.sql
```
./export.sh
```
---
## Themes
```
volumes:
  - ./themes:/var/www/html/wp-content/themes/ 
```
---
## Plugins
```
volumes:
  - ./plugins:/var/www/html/wp-content/plugins/
```
---
## WP CLI

The docker compose configuration also provides a service for using the [Wordpress CLI](https://developer.wordpress.org/cli/commands/).

Find and Replace: 
```
./find_replace.sh
```
This will ask for your **first string** to replace the **second string** in the db             
and if you are on **production** and if you would like to do a **dry run**.

# Production
....

# test 1
 