const stDigitalImage = require('../../model/StDigitalmodel/modelImage')

const stDigitalImageController = {
    addStDigitalImage :async (req, res) => {
        try{
            const newStDigitalImage = new stDigitalImage(req.body)
            const saveFe07div = await newStDigitalImage.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getStDigitalImage: async (req, res) => {
        try{
            const getStDigitalImage = await stDigitalImage.find()
            return res.status(200).json(getStDigitalImage)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= stDigitalImageController