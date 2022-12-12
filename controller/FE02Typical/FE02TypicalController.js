const fe02typical = require("../../model/FE02TypicalModel/modelFE02Typical")

const FE02TypicalController = {
    addFe02Typical: async (req, res) => {
        try {
            const newFe02Typical = new fe02typical(req.body)
            const saveFe02Typical = await newFe02Typical.save()
            res.status(200).json(saveFe02Typical);
        }
        catch (err){
            res.status(500).json(err);
        }
    },
    getFe02Typical:async (req, res) => {
        try{
            // lấy ra tất cả thông tin trong database
            const fe02 = await fe02typical.find();
            res.status(200).json(fe02);
        }
        catch (err){
            res.status(500).json(err)
        }
    }
};

module.exports = FE02TypicalController