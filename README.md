# GOODREADS code challange
## Installation
To run this project, you need to have docker and docker-compose installed on your computer. Once you do, you can build and run it by executing <code>docker compose up --build</code>.

## Structure
The project structure contains three directories: 
<ul>
<li>app</li>
<li>config</li>
<li>compose</li>
</ul>
The compose folder contains the configurations required to create the containers. Within the db and goodreads folders that are inside this folder, it is needed that they have a .env file inside each one of them. The required .env files would look like the following:<br>

<code>
# /compose/db/
MYSQL_ROOT_PASSWORD=SUPER_SECRET_PASSWORD
MYSQL_DATABASE=goodreads_db
MYSQL_USER=mysqluser
MYSQL_PASSWORD=SUPER_SECRET_PASSWORD
</code>
<code>
# /compose/goodreads/
SECRET_KEY=SUPER_SECRET_PASSWORD
PORT=3000
DATABASE_HOST=mysql
DATABASE_USER=mysqluser
DATABASE_NAME=goodreads_db
DATABASE_PASSWORD=SUPER_SECRET_PASSWORD
DATABASE_WAIT_FOR_CONNECTIONS=TRUE
DATABASE_CONNECTION_LIMIT=10
DATABASE_QUEUE_LIMIT=1
</code>
