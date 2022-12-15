const incubation = require("../../model/InCubation/modelIncubation");
const IncubationController = {
    addIncubation: async (req, res) => {
        try {
            const newFe02Typical = new incubation(req.body)
            const saveFe02Typical = await newFe02Typical.save()
            res.status(200).json(saveFe02Typical);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getIncubation :async (req, res) =>{
        try{
            const getIncubation = await incubation.find()
            res.status(200).json(getIncubation);
        }catch (err){
            res.status(500).json(err);
        }
    }
};
module.exports = IncubationController