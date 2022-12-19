const whoweared2 = require("../../model/WhoWeAremodel/WhoWeAreD2");
const WhoWeAreD2Controller = {
    addWhoWeAreD2 :async (req, res) => {
        try{
            const newWhoWeAre02 = new whoweared2(req.body)
            const saveWhoWeAre02 = await newWhoWeAre02.save();
            return res.status(200).json(saveWhoWeAre02)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getWhoWeAreD2: async (req, res) => {
        try{
            const getWhoWeAre02 = await whoweared2.find()
            return res.status(200).json(getWhoWeAre02)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= WhoWeAreD2Controller