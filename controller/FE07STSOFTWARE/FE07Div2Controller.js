const fe07div2 = require('../../model/FE07STSOFTWAREModel/modelFe07Div2')

const Fe07Div2Controller = {
    addFe07div2 :async (req, res) => {
        try{
            const newFe07div2 = new fe07div2(req.body)
            const saveFe07div = await newFe07div2.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getFe07div2: async (req, res) => {
        try{
            const getFe07 = await fe07div2.find()
            return res.status(200).json(getFe07)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= Fe07Div2Controller