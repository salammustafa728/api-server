'use strict';

const food = (sequelize, DataTypes)=> sequelize.define('food',{
    foodName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    foodInfo: {
        type: DataTypes.STRING,
    }
});

module.exports = food;