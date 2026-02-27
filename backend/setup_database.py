#!/usr/bin/env python3
"""
Script to create the MySQL database and user if they don't exist.
Run this script once to set up the database.
"""

import pymysql
import sys

# MySQL connection parameters for root user
MYSQL_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',  # Add your MySQL root password if needed
    'charset': 'utf8mb4'
}

DB_NAME = 'task_management'
DB_USER = 'aplicacionsena'
DB_PASSWORD = 'Juanjesus200619'

def setup_database():
    """Create database and user if they don't exist"""
    try:
        # Connect to MySQL server
        connection = pymysql.connect(**MYSQL_CONFIG)
        cursor = connection.cursor()
        
        # Create database if it doesn't exist
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
        print(f"Database '{DB_NAME}' created or already exists")
        
        # Create user if it doesn't exist
        cursor.execute(f"CREATE USER IF NOT EXISTS '{DB_USER}'@'localhost' IDENTIFIED BY '{DB_PASSWORD}'")
        print(f"User '{DB_USER}' created or already exists")
        
        # Grant privileges to the user
        cursor.execute(f"GRANT ALL PRIVILEGES ON {DB_NAME}.* TO '{DB_USER}'@'localhost'")
        cursor.execute("FLUSH PRIVILEGES")
        print(f"Privileges granted to user '{DB_USER}'")
        
        cursor.close()
        connection.close()
        
        print("\nDatabase setup completed successfully!")
        print(f"Database: {DB_NAME}")
        print(f"User: {DB_USER}")
        print(f"You can now run the Flask application.")
        
    except pymysql.Error as e:
        print(f"Error setting up database: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    setup_database()
