const fe07div1 = require('../../model/FE07STSOFTWAREModel/modelFe07Div1')

const Fe07Div1Controller = {
    addFe07div1 :async (req, res) => {
        try{
            const newFe07div1 = new fe07div1(req.body)
            const saveFe07div = await newFe07div1.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getFe07div1: async (req, res) => {
        try{
            const getFe07 = await fe07div1.find()
            return res.status(200).json(getFe07)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= Fe07Div1Controller