# Geolocation platform

Run:
```
docker-compose up -d --build
```
then login to container:
```
docker-compose exec geolocation-api /bin/bash
```
and then run migrations to have schema and some initial data:
```
./node_modules/.bin/typeorm migration:run
```

Aplication will be available at:
```
http://localhost:8081
```
To get JWT token:
```
POST http://localhost:8081/login

{
  username: 'admin',
  password: 'admin'
}
```
then using token there are available actions:
```
POST http://localhost:8081/ //adding geolocation data

{
  data: 'google.com'
}
```
```
GET http://localhost:8081/ // list of added geolocations
```
```
DELETE http://localhost:8081/ //delete geolocation data

{
  data: 'google.com'
}
```
