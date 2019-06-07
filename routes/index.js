var express = require('express');
var router = express.Router();
var firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyCH5M38DFEcJGW3n94hDM3n4akgEgKDoRA",
  authDomain: "scada-beb30.firebaseapp.com",
  databaseURL: "https://scada-beb30.firebaseio.com",
  projectId: "scada-beb30",
  storageBucket: "scada-beb30.appspot.com",
  messagingSenderId: "400122545130",
  appId: "1:400122545130:web:a0574f70b4cc3de4"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database()

/* GET home page. */
router.post('/getnow', function (req, res, next) {
  db.ref('/').once('value', function (snap) {
    return snap.toJSON()
  }).then(result => {
    res.json(result);
  })
});
router.post('/edit', function (req, res, next) {
  if(req.body.value == true){
    db.ref('/').child(req.body.key).set(1).then(() => {
      res.sendStatus(200)
    });
  }
  else{
    db.ref('/').child(req.body.key).set(0).then(() => {
      res.sendStatus(200)
    });
  }
});

module.exports = router;
