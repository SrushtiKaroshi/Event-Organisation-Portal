const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {log,eve,spe} = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "mongodb://localhost:27017/Events";

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true }, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});
function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}
router.post('/login',(req,res) =>{
  let user = req.body.prn
  let pwd = req.body.password
  const data = log.findOne({prn:user,password:pwd})
  if(data)
  {
    let payload = {subject: 1}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token}) 
  }
  else 
    {
        res.status(401).send('Invalid Password')
    } 
});
router.get('/events',function(req,res,next){
  eve.find({}).then(function(events){
      res.send(events);
      
  }).catch(next);
});
router.get('/special',verifyToken,(req,res,next)=>{
  spe.find({}).then(function(special){
      res.send(special);
  }).catch(next);
});
module.exports = router;


