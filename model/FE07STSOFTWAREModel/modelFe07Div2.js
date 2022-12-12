const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const Fe07Div02 = new mongoose.Schema({
    content:{
        type:String,
    },
    title:{
        type:String,
    },
    icon:{
        type:String,
    },
    link:{
        type:String,
    },
    Fe07DivId2:{
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports =mongoose.model("fe07div2",Fe07Div02)