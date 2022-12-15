const incubationText = require("../../model/InCubation/modelTextIncubation");
const IncubationTextController = {
    addIncubationText: async (req, res) => {
        try {
            const newFe02Typical = new incubationText(req.body)
            const saveFe02Typical = await newFe02Typical.save()
            res.status(200).json(saveFe02Typical);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getIncubationText :async (req, res) =>{
        try{
            const getIncubation = await incubationText.find()
            res.status(200).json(getIncubation);
        }catch (err){
            res.status(500).json(err);
        }
    }
};
module.exports = IncubationTextController