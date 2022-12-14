const partner = require('../../model/Partner/Partnermodel')

const PartnerController = {
    addPartner :async (req, res) => {
        try{
            const newFe07div2 = new partner(req.body)
            const saveFe07div = await newFe07div2.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getPartners: async (req, res) => {
        try{
            const getFe07 = await partner.find()
            return res.status(200).json(getFe07)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= PartnerController