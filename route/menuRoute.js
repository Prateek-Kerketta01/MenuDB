const express = require('express');
const route = express.Router();

const Menu = require('./../models/menu');

route.get('/', async (req, res) => {
    try{
        const data = await Menu.find();
        res.send(data);
    }catch(err){
        console.log(err),
        res.json({err: 'internal server error'});
    }
})

route.post('/', async (req, res) => {
    try{
        const data = req.body;
        const MenuItem = new Menu(data);
        const response = await MenuItem.save();
        console.log('data saved');
        res.json(response);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

route.get('/:tasteType', async (req, res) => {
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == "Sweet" || tasteType == "Spicy" || tasteType == "sour"){
            const data = await Menu.find({taste: tasteType});
            console.log('data fetched');
            res.status(200).json(data);
        }else{
            res.status(400).json({err: 'Invalid taste type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

route.put('/:id', async(req, res) => {
    try{
        const menuId = req.params.id;
        const updatedData = req.body;
        const response = await Menu.findByIdAndUpdate(menuId, updatedData, 
            {new: true, //return the updated document
            runValidators: true // run the model validators
        });
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

route.delete('/:id', async(req, res)=>{
    try{
        const menuId = req.params.id;
        const response = await Menu.findByIdAndDelete(menuId);
        res.status(200).json(response);
        console.log('data deleted');
    }catch(err){
        res.status(500).json(err);
        console.log('fialed to delete the data')
    }
})

module.exports = route; 