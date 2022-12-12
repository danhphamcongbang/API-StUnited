const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const Fe07Div01 = new mongoose.Schema({
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
    Fe02DivId:{
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports =mongoose.model("fe07div1",Fe07Div01)