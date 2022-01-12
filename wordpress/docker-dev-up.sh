#!/bin/bash
docker-compose up -d

read -r -p "Do you want to import a new database? [Y/n] " input
if [[ "$input" =~ ^([yY][eE][sS]|[yY])$ ]]
then 
echo "Yes" 
./import.sh;
elif [[ "$input" =~ ^([nN][oO]|[nN])$ ]]
then 
echo "No"
else 
echo "Invalid input..."
exit 1
fi

read -r -p "Elementor? [Y/n] " input
if [[ "$input" =~ ^([yY][eE][sS]|[yY])$ ]]
then 
echo "Yes" 
./find_replace_elementor.sh
elif [[ "$input" =~ ^([nN][oO]|[nN])$ ]]
then 
echo "No"
else 
echo "Invalid input..."
exit 1
fi

read -r -p "Find and Replace? [Y/n] " input
if [[ "$input" =~ ^([yY][eE][sS]|[yY])$ ]]
then 
echo "Yes" 
./find_replace.sh
elif [[ "$input" =~ ^([nN][oO]|[nN])$ ]]
then 
echo "No"
else 
echo "Invalid input..."
exit 1
fi