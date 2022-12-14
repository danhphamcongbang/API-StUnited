const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const WeDevelop = new mongoose.Schema({
    img:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    link:{
        type:String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports =mongoose.model("wedelelop",WeDevelop)