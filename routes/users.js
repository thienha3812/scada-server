var express = require('express');
var router = express.Router();
var sequelize = require('../model/config');
var Sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.post('/login', function(req, res, next) {
    // sequelize.query("SELECT * FROM users WHERE username = :username and password = :password",{
    //   replacements:{
    //       password : req.body.password ,
    //       username : req.body.username  
    //   },
    //   type : Sequelize.QueryTypes.SELECT
    // }).then(result=>{          
    //     if(result.length !== 0){
    //       res.json({token : jwt.sign(result[0],'secret'),check : 1});
    //     }else{
    //       res.json({check:-1});
    //     }
    // })
    res.sendStatus(200);
});

module.exports = router;
