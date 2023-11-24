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

<code># /compose/db/
MYSQL_ROOT_PASSWORD=SUPER_SECRET_PASSWORD
MYSQL_DATABASE=goodreads_db
MYSQL_USER=mysqluser
MYSQL_PASSWORD=SUPER_SECRET_PASSWORD
</code>

<code># /compose/goodreads/
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

## Current application state
Currently the application is fully dockerized and it has the following operating endpoints:</br>
<ul>
<li>Create author (POST /author/)</li>
<li>Delete author (DELETE /author/)</li>
<li>Query authors (GET /author/)</li>
<li>Create account (POST /auth/create-account/)</li>
</ul>

## Missing implementations
Due to time restrictions, I was not able to implement the following requirements: <br>
<ul>
<li>Model Schemas / Serializers: I created a simple schema to serialize the Author model on
its GET endpoint, but I didn't have the time to create schemas for the other models. I prioritized doing the Create Account functionality.</li>
<li>Authentication: It is still needed to create a login endpoint that validates the requested user and password, as well as the middleware that checks the JWT.</li>
<li>Other store procedure implementations: Every stored procedure is in the schema.sql file within the compose/db folder, but I didn't have time to implement most of them.</li>
</ul>

## Standart mismatching
I am aware that the standart used in my structre is inconsistent, that is due to my lack of experience building solutions with this specific framework. However, I would adapt to any standart that is used among the company's developers. 