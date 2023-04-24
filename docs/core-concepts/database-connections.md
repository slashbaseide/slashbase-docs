---
sidebar_position: 2
---

# Database Connections

A Database connection in Slashbase has details of connections that can be used to connect to the given database. A database connection when connecting can make a direct connection to the database or can use an SSH tunnel to connect to the database in the given VPC. Supports MySQL, PostgreSQL and MongoDB connections.

## Concept 
A database connection can have:
- Nickname
- Host
- Port
- Scheme
- Database
- Username
- Password
- Use SSH or None
- SSH Host (optional)
- SSH username (optional)
- SSH password (optional)
- SSH key (optional)

## Adding a database connection 
To add a new database connection in Slashbase:
1. You need to make sure, you have admin role in the project you are adding.
2. Go to the project page you want to add the connection in.
3. Click on Add New DB Connection button.
4. Fill the details required to make connection to the database.
5. Click on Add button.

## Deleting a database connection
To delete a database connection:
1. You need to make sure, you have admin role in the project you are adding.
2. Go to the project page you want to delete the connection from.
3. Click on the three dots menu on the database connection you want to delete.
4. Click on Delete DB button.