const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const IncubationTextSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    img:{
        type: String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
    }
})
module.exports =mongoose.model("incubationText",IncubationTextSchema)