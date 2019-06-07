const Sequelize = require('sequelize');
const sequelize = new Sequelize('schoolity','haonguyen','123456789',{
    dialect:'mssql',
   host:'jcenter.sytes.net',
   port:1433,
   encrypt:false,
  
});
module.exports = sequelize;
