const mongoose= require('mongoose');
const mongodb =require ("mongodb");

const IncubationSchema = new mongoose.Schema({
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
    linkheader: {
        type: String,
    },
    linkfb: {
        type: String,
    },
    linkins:{
        type: String,
    },
    linkgg:{
        type: String,
    },
    linktwitter: {
        type: String,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
    }
})
module.exports =mongoose.model("incubation",IncubationSchema)