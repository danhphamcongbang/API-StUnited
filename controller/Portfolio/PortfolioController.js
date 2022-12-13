const portfolio = require('../../model/Porfolio/modalPorfolio')

const PortfolioController = {
    addPortfolio :async (req, res) => {
        try{
            const newFe07div2 = new portfolio(req.body)
            const saveFe07div = await newFe07div2.save();
            return res.status(200).json(saveFe07div)
        }
        catch (err){
            res.status(500).json(err)
        }
    },
    getPortfolio: async (req, res) => {
        try{
            const getPortfolio = await portfolio.find()
            return res.status(200).json(getPortfolio)
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
}
module.exports= PortfolioController