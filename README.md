# Desafio-Beeleads (Travel A)
## Home page
![Home page](https://github.com/GenoaroSJr/desafio-Beeleads/blob/master/inicial.png)

## Thanks page
![Thanks page](https://github.com/GenoaroSJr/desafio-Beeleads/blob/master/thanks.png)

## Install dependencies
```sh
# To clone the project
git clone: https://github.com/GenoaroSJr/desafio-Beeleads.git

# Go to the project directory
cd desafio-Beeleads/

# Install dependencies
npm start
```

## Run project 
```sh
# Start the database
mongod

# Start the server
nodemon app.js

# See the project
https://localhost:8081
```

### Note
To run the project, you will need to have the mongodb database installed. 
The project calls for the creation of two pages, so a page was not created to view the registered data.
To view the records in the database:
```sh
# Open the database
mongo

# Path to the logs
use travelA
db.registers.find()
```
