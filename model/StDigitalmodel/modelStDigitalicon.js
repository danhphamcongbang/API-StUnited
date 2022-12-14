const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const modelStDigitalicon = new mongoose.Schema({
    description:{
        type: String,
    },
    title:{
        type: String,
    },
    image:{
        type: String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "stDigitalIcon"
    }
})
module.exports =mongoose.model("stDigitalIcon",modelStDigitalicon)