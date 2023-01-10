const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    prn:{
        type: String,
        required: true,
    },
    password:{
       type: String,
       required: true,
    }
    
});
const sch = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    Teacher: {
        type: String,
    }
});
const eve = mongoose.model('events',sch,'events');
const spe = mongoose.model('special',sch,'special');
const log = mongoose.model('login', userSchema,'login');
module.exports={
    eve,spe,log
}