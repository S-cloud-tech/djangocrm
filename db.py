import os
import mysql.connector

db = mysql.connector.connect(
    host = '127.0.0.1',
    user = 'root',
    passwd = os.getenv('DB_PASSWORD'),
)

cursorobject =db.cursor()

cursorobject.execute("CREATE DATABASE dcrmtest")

print("DONE!!!")
