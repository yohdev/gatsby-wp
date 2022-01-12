#!/bin/bash
echo "Find: "
read  first
echo "Replace: "
read  second
read  -r -p "Production? [Y/n] " env

read  -r -p "Dry run? [Y/n] " flag

if [[ "$env" =~ ^([yY][eE][sS]|[yY])$ ]] && [[ "$flag" =~ ^([yY][eE][sS]|[yY])$ ]]
then
echo "Production , Dry Run" 
docker-compose -f docker-compose.prod.yml run --rm wpcli wp search-replace $first $second --dry-run

elif [[ "$env" =~ ^([nN][oO]|[nN])$ ]] && [[ "$flag" =~ ^([nN][oO]|[nN])$ ]]
then 
echo "Dev, No Dry Run" 
docker-compose run --rm wpcli wp search-replace $first $second 

elif [[ "$env" =~ ^([yY][eE][sS]|[yY])$ ]] && [[ "$flag" =~ ^([nN][oO]|[nN])$ ]]
then 
echo "Prod, No Dry Run" 
docker-compose -f docker-compose.prod.yml run --rm wpcli wp search-replace $first $second 

elif [[ "$env" =~ ^([nN][oO]|[nN])$ ]] && [[ "$flag" =~ ^([yY][eE][sS]|[yY])$ ]]
then 
echo "Dev, Dry Run" 
docker-compose run --rm wpcli wp search-replace $first $second --dry-run
else 
echo "Invalid input..."
exit 1
fi