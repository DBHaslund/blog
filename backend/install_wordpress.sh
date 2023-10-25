#!/usr/bin/env sh

set -e

mysql_ready='nc -z db 3306'

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
    echo
fi

# wp plugin delete akismet hello
wp plugin install --activate --force --allow-root atlas-content-modeler

echo "Great. You can now log into WordPress at: http://localhost/wp-admin ($WORDPRESS_ADMIN_USER/$WORDPRESS_ADMIN_PASSWORD)"