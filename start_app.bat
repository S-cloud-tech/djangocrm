@ECHO off

start /min python manage.py runserver

start /min npm run djangocrm

# start /b python manage.py runserver & start /b npm run djangocrm