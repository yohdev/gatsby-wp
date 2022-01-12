#!/bin/bash
branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
git_repo=$(basename `git rev-parse --show-toplevel`)
_os="`uname`"
_now=$(date +"%m_%d_%Y_%I:%M:%S")
_file="./backups/${git_repo}_${_now}_${branch}_preimport.sql"

# Export dump
EXPORT_COMMAND='exec mysqldump "$MYSQL_DATABASE" -uroot -p"$MYSQL_ROOT_PASSWORD"'
docker-compose exec db sh -c "$EXPORT_COMMAND" > $_file

echo "Select a file from the list "

files=$(ls backups/ | grep -v '.bak' )
i=1

for j in $files
do
echo "$i.$j"
file[i]=$j
i=$(( i + 1 ))
done

echo "File name: "
read  file_name

echo "You selected the file ${file[$file_name]} "

echo "Select a file from the list "

files2=$(docker ps --format '{{.Names}}' | grep _db )
i=1

for j in $files2
do
echo "$i.$j"
file2[i]=$j
i=$(( i + 1 ))
done


echo "Container name: "
read  container_name

echo "You selected the container ${file2[$container_name]}"

# Export dump
cat backups/${file[$file_name]} | docker exec -i ${file2[$container_name]} //usr/bin/mysql -u wordpress --password=password wordpress
