const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const dotenv = require("dotenv");
//////////////////////////////////////////////////////////////////////////////

const FE02TypicalRouter = require("./routes/FE02TypicalRoute/FE02Typical")
const Fe07Div01Router =require("./routes/FE07STSOFTWARERoute/FE07Div1Router")
const Fe07Div02Router =require("./routes/FE07STSOFTWARERoute/FE07Div2Router")
const PortfolioRouter =require("./routes/PortfolioRoute/PortfolioRouter")
const stDigitalIconRouter = require("./routes/StDigitalRoute/stDigitaliconRouter");
const stDigitalImageRouter = require("./routes/StDigitalRoute/stDigitalImageRouter");
const PartnerRouter = require("./routes/PartnerRoute/Partroute")
const JoinUsRouter = require("./routes/joinusRoute/JoinUsRouter")
const WeDevelopRouter = require("./routes/wedevelopRoute/WeDevelopRoute")
const IncubationRouter = require("./routes/IncubationRoute/IncubationRoute")
const routerIncubationText =require("./routes/IncubationRoute/IncubationTextRout")
/////////////////////////////////////////////////
dotenv.config()
mongoose.set('strictQuery', true);

mongoose.connect((process.env.MONGODB_URL),() => {
    console.log("connected to MongoDB Done")
})
app.use(cors())
app.use(morgan("common"))
    app.use(bodyParser.json({limit:"50mb"}))
//////////////////---------------ROUTE----------//////////////////////////////////////////////////
app.use("/fe02-typical",FE02TypicalRouter);
app.use("/fe07-div1",Fe07Div01Router);
app.use("/fe07-div2",Fe07Div02Router);
app.use("/portfolio",PortfolioRouter);
app.use("/st-digital-icon",stDigitalIconRouter);
app.use("/st-digital-image",stDigitalImageRouter);
app.use("/partner",PartnerRouter);
app.use("/join-us",JoinUsRouter);
app.use("/we-develop",WeDevelopRouter);
app.use("/incubation",IncubationRouter);
app.use("/incubation-1",routerIncubationText) ;



//////////////////-----------------------------////////////////////////////////////////////////
app.listen(process.env.PORT||8000, ()=>{
    console.log("server is running......")
});