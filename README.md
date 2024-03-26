# Movie API

This REST API allows you to manage genres and movies in a database.

## Database Structure

Please refer to the `db.txt` file for the database structure.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the `movie-api` folder.
3. Run `npm install` to install dependencies.

## Available Commands

### Genres

#### Get all genres

```bash
curl -X GET http://localhost:3000/genres

Database structure is writen in the db.txt file

follow the npm instructions inside the movie-api folder

Available Commands
curl -X GET http://localhost:3000/genres
curl -X GET http://localhost:3000/genres/:id
curl -X POST http://localhost:3000/genres -H "Content-Type: application/json" -d "{\"name\": \"Action\"}"
curl -X PUT http://localhost:3000/genres/:id -H "Content-Type: application/json" -d "{\"name\": \"New Name\"}"
curl -X DELETE http://localhost:3000/genres/:id
curl -X GET http://localhost:3000/movies
curl -X GET http://localhost:3000/movies/:id
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d "{\"title\": \"Movie Title\", \"genre_id\": 1}"
curl -X PUT http://localhost:3000/movies/:id -H "Content-Type: application/json" -d "{\"title\": \"New Title\", \"genre_id\": 2}"
curl -X DELETE http://localhost:3000/movies/:id
