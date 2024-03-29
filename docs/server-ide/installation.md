---
sidebar_position: 1
---

# Install Slashbase Server IDE

Self-hosting Slashbase on your own server is easy. You need a Linux server. Follow the following steps to install it.

## Prerequisites
- Linux server instance in AWS/Google Cloud/Azure/Digital Ocean or any other cloud provider.
- Docker & Docker compose installed on server instance. If you don't have docker installed, follow the [docker installation page](https://docs.docker.com/engine/install/)

## Running Install Script
1. SSH into your server instance.
2. Run the following commands:
```
mkdir slashbase && cd slashbase
curl --location --output install.sh https://raw.githubusercontent.com/slashbaseide/slashbase/main/deploy/install.sh
chmod +x install.sh
./install.sh
```
3. Enter root user email and password & wait till the setup completes.
4. If install succeeds, Slashbase Server is running on port 3000.
5. (Additionally) You can point the server to a URL like slashbase.yourcompany.com by using nginx/apache or any other server software and add an SSL certificate. 

## Manual Instructions 
1. SSH into your server instance.
2. Run the following commands:
```
mkdir slashbase && cd slashbase
touch docker-compose.yml
touch app.env
```
3. Update the contents of docker-compose.yml with [this file](https://github.com/slashbaseide/slashbase/blob/main/deploy/docker-compose.yml) contents.
4. Update the contents of app.env with [this file](https://github.com/slashbaseide/slashbase/blob/main/deploy/server.env.sample) contents.
5. Update the required docker-compose.yml variables file as below:
    - `${POSTGRES_DB}` as a postgres database name. Or use `slashbase`.
    - `${POSTGRES_USER}` as postgres user name.
    - `${POSTGRES_PASSWORD}` as postgres password.
5. Update the required app.env variables in file as below:
    - `${slashbase_root_email}` to root user's email address.
    - `${slashbase_root_password}` to root user's password.
    - `${auth_secret}` to value generated by the command `tr -dc A-Za-z0-9 </dev/urandom | head -c 64 ; echo ''`.
    - `${crypted_data_secret}` to value generated by the command `openssl rand -hex 32`.
    - `${app_db_host}` to the value `slashbase-db`.
    - `${app_db_port}` to the value `5432`.
    - `${app_db_user}` to the db user value that you use in docker-compose.yml file.
    - `${app_db_pass}` to the db password value that you use in docker-compose.yml file.
    - `${app_db_name}` the the db name that you use in docker-compose.yml file.
6. Run `docker compose up`.
7. Slashbase Server is running on port 3000.
8. (Additionally) You can point the server to a URL like slashbase.yourcompany.com by using nginx/apache or any other server software and add an SSL certificate. 

# Troubleshooting 
If you face any issues installing or using slashbase, send us a mail at slashbaseide@gmail.com or contact support chat on our website slashbase.com.



