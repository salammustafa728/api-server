'use strict';

const express = require('express');
const food = require('../models/food.model');
const {foodCollection} = require('../models/index');

const router = express.Router();

//routes
router.get('/food',getAllFood);
router.post('/food',createNewFood);
router.get('/food/:id',getOneFood);
router.delete('/food/:id',deleteOneFood);
router.put('/food/:id',UpdateFood);

//localhost:3000/food
async function getAllFood(req,res){
    let foodD = await foodCollection.readData();
    res.status(200).json(foodD);
}

async function createNewFood(req,res){
    let newFood = req.body;
    let foodDb = await foodCollection.createData(newFood);
    res.status(201).json(foodDb);
}

async function getOneFood(req,res){
    let oneFood = parseInt(req.params.id);
    let fooddata = await foodCollection.readData(oneFood)
    res.status(200).json(fooddata);
}
async function deleteOneFood(req,res){
    let deleteFoodID = parseInt(req.params.id);
    console.log(req.params.id);
    let deleteOneFood = await foodCollection.deleteRecord(deleteFoodID)
    res.status(204).json(deleteOneFood)
}
async function UpdateFood(req,res){
    let updateBody = req.body;
    let FoodID = parseInt(req.params.id);
    let UpdateFoodOne = await foodCollection.updateRecord(updateBody,FoodID)
        res.status(201).json(UpdateFoodOne);
}
module.exports = router;