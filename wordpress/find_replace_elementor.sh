#!/bin/bash
echo "Find: "
read  first
echo "Replace: "
read  second

read  -r -p "Production? [Y/n] " env
if [[ "$env" =~ ^([yY][eE][sS]|[yY])$ ]]
then
echo "Production , Elementor" 
docker-compose -f docker-compose.prod.yml run --rm wpcli wp elementor replace_urls $first $second
else 
echo "Dev , Elementor" 
docker-compose run --rm wpcli wp elementor replace_urls $first $second

fi