const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const JoinUs = new mongoose.Schema({
    img:{
        type:String,
    },
    link: {
        type: String,
    },
    description: {
        type: String,
    },
    title: {
        type: String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports =mongoose.model("joinus",JoinUs)