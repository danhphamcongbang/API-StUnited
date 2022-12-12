const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const FE02TypicalSchema = new mongoose.Schema({
    teamCaptionHide:{
        type: String,
        require:true
    },
    teamDesigner:{
        type: String,
    },
    teamCaption:{
        type: String,
    },
    image:{
        type: String,
    },
    idFe02:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fe02typical"
    }
})
module.exports =mongoose.model("fe02typical",FE02TypicalSchema)