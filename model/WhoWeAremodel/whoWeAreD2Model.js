const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const WhoWeAreD2Model = new mongoose.Schema({
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
module.exports =mongoose.model("whoweared2",WhoWeAreD2Model)

