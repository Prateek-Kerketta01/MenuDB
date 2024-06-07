const server = require('express')
const app = server();
require('dotenv').config();

const db = require('./db')

const Menu = require('./models/menu')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // this will store the js object in req.body

// import the router file
const menuRoute = require('./route/menuRoute');
// use the router file
app.use('/menu', menuRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log("Server is running on port 3000")})