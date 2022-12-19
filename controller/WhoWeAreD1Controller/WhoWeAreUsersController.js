const whowearedUser = require("../../model/WhoWeAremodel/whoWeAreUser");
const WhoWeAreUserController = {
    addWhoWeAreUser :async (req, res) => {
        try{
            const newWhoWeAreUser = new whowearedUser(req.body)
            const saveWhoWeAreUser = await newWhoWeAreUser.save();
            return res.status(200).json(saveWhoWeAreUser)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getWhoWeAreUser: async (req, res) => {
        try{
            const getWhoWeAreUser = await whowearedUser.find()
            return res.status(200).json(getWhoWeAreUser)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= WhoWeAreUserController