const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const modalPorfolio = new mongoose.Schema({
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
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "portfolio"
    }
})
module.exports =mongoose.model("portfolio",modalPorfolio)