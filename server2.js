const express = require('express')
const req = require('express/lib/request')
const app = express()

const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // this will store the js object in req.body
const Person = require('./models/person')




app.get('/', function (req, res) {
    res.send('Hello World this is my first server')
})

app.post('/person', async(req, res) => {
    try{
        const data = req.body; // assuming the request body contains the person data

    // create a new person document using the mongoose model
    const newPerson = new Person(data);
    
    // save the newPerson document to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'});
    }
    
})


// get method to fetch all the person data
app.get('/persons', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched')
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'});
    }
})


app.listen(3000, () => {console.log("Server is running on port 3000")})