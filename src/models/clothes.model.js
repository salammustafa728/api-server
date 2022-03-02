'use strict';

const cloths = (sequelize, DataTypes)=> sequelize.define('cloths',{
    clothsName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    clothsInfo: {
        type: DataTypes.STRING,
    },
   }

);

module.exports = cloths;