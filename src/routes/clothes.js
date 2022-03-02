'use strict';

const express = require('express');
const {clothsColection} = require('../models/index');

const routerCloth = express.Router();

//routes
routerCloth.get('/cloths',getAllCloths);
routerCloth.post('/cloths',createNewCloths);
routerCloth.get('/cloths/:id',getOneCloths);
routerCloth.delete('/cloths/:id',deleteOneCloths);
routerCloth.put('/cloths/:id',Updatecloths);

//localhost:3000/cloths
async function getAllCloths(req,res){
    let clothsData = await clothsColection.readData();
    res.status(200).json(clothsData);
}

async function createNewCloths(req,res){
    let newCloths = req.body;
    let clothsDbNew = await clothsColection.createData(newCloths);
    res.status(201).json(clothsDbNew); 
}

async function getOneCloths(req,res){
    let onecloths = parseInt(req.params.id);
    let clothData = await clothsColection.readData(onecloths);
    res.status(200).json(clothData);
}

async function deleteOneCloths(req,res){
   let clothsId = parseInt(req.params.id);
   let deleteOnecloth = await clothsColection.deleteRecord(clothsId)
   res.status(204).json(deleteOnecloth); 
}

async function Updatecloths(req,res){
    let Updbody = req.body;
    let clothID = parseInt(req.params.id);
    let updatedCltoh = await clothsColection.updateRecord(Updbody,clothID)
    res.status(201).json(updatedCltoh);
}

module.exports = routerCloth;