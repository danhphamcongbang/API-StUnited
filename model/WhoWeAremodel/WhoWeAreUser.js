const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const WhoWeAreUser = new mongoose.Schema({
    name:{
        type:String,
    },
    position:{
        type:String,
    },
    image:{
        type:String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId
    }
})
module.exports =mongoose.model("whowearedUser",WhoWeAreUser)