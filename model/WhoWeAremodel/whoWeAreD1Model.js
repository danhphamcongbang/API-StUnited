const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const WhoWeAreD1Model = new mongoose.Schema({
    title:{
        type:String,
    },
    text:{
        type:String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId
    }
})
module.exports =mongoose.model("whoweared1",WhoWeAreD1Model)

