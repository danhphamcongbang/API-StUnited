const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const Partner = new mongoose.Schema({
    image:{
        type:String,
    },
    link: {
        type: String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports =mongoose.model("partner",Partner)