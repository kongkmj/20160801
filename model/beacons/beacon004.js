var mongoose = require('mongoose');

var beacon004 ={
  gnum:{type:String},
  bnum:{type:String},
  beaconx:{type:String},
  beacony:{type:String},
  status:{type:String},
  createdAt:{type:Date,default:Date.now},
};

module.exports =beacon004;
