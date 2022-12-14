const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const modelStDigitalImage = new mongoose.Schema({
    Name:{
        type: String,
    },
    Work:{
        type: String,
    },
    image:{
        type: String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "stDigitalImage"
    }
})
module.exports =mongoose.model("stDigitalImage",modelStDigitalImage)