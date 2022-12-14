const stDigitalIcon = require('../../model/StDigitalmodel/modelStDigitalicon')

const stDigitalIconController = {
    addStDigitalIcon :async (req, res) => {
        try{
            const newStDigitalIcon = new stDigitalIcon(req.body)
            const saveFe07div = await newStDigitalIcon.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getStDigitalIcon: async (req, res) => {
        try{
            const getStDigitalIcon = await stDigitalIcon.find()
            return res.status(200).json(getStDigitalIcon)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= stDigitalIconController