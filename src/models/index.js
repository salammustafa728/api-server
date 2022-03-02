'use strict';
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const food = require('./food.model');
const cloths = require('./clothes.model')
const Collection = require('./collection-class')

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};


let sequelize = new Sequelize(POSTGRES_URI,sequelizeOptions);

let foodmodel = food(sequelize,DataTypes);
let clothsModel =  cloths(sequelize,DataTypes);

let foodCollect = new Collection(foodmodel)
let clothsCollect = new Collection(clothsModel)

module.exports = {
    db: sequelize,
    foodCollection: foodCollect,
    clothsColection: clothsCollect
}