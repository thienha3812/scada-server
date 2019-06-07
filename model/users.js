const config = require('./config')
const Sequelize = require('sequelize');

const user = config.define('user',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey  : true,
        autoIncrement: true
    },
    username : Sequelize.STRING,
    password : Sequelize.STRING,
},{
    tableName : 'users',
    timestamps : false,
});
module.exports = user