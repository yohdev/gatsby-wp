#!/bin/bash
read -r -p "Do you want to remove volumes? [Y/n] " input
case $input in
    [yY][eE][sS]|[yY])
 echo "Yes"
 docker-compose down -v;;
    [nN][oO]|[nN])
 echo "No"
       docker-compose down;;
    *)
 echo "Invalid input..."
 exit 1
 ;;
esac