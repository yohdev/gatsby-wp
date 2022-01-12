#!/bin/bash
branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
git_repo=$(basename `git rev-parse --show-toplevel`)
_os="`uname`"
_now=$(date +"%m_%d_%Y_%I:%M:%S")
_file="./backups/${git_repo}_${_now}_${branch}.sql"


# Export dump
EXPORT_COMMAND='exec mysqldump "$MYSQL_DATABASE" -uroot -p"$MYSQL_ROOT_PASSWORD"'

docker-compose exec db sh -c "$EXPORT_COMMAND" > $_file

