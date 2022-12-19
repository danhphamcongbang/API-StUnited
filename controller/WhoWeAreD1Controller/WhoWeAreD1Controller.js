const whoweared1 = require("../../model/WhoWeAremodel/WhoWeAreD1");
const WhoWeAreD1Controller = {
    addWhoWeAreD1 :async (req, res) => {
        try{
            const newWhoWeAre01 = new whoweared1(req.body)
            const saveWhoWeAre01 = await newWhoWeAre01.save();
            return res.status(200).json(saveWhoWeAre01)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getWhoWeAreD1: async (req, res) => {
        try{
            const getWhoWeAre01 = await whoweared1.find()
            return res.status(200).json(getWhoWeAre01)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= WhoWeAreD1Controller