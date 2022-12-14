const wedelelop = require('../../model/wedelelop/WeDelelopModel')

const WeDevelopController = {
    addWedevelop :async (req, res) => {
        try{
            const newStDigitalIcon = new wedelelop(req.body)
            const saveFe07div = await newStDigitalIcon.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getWedevelop: async (req, res) => {
        try{
            const getStDigitalIcon = await wedelelop.find()
            return res.status(200).json(getStDigitalIcon)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= WeDevelopController