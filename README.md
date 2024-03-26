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
