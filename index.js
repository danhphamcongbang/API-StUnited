const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const dotenv = require("dotenv");
const FE02TypicalRouter = require("./routes/FE02TypicalRoute/FE02Typical")
const Fe07Div01Router =require("./routes/FE07STSOFTWARERoute/FE07Div1Router")
const Fe07Div02Router =require("./routes/FE07STSOFTWARERoute/FE07Div2Router")
dotenv.config()

mongoose.connect((process.env.MONGODB_URL),() => {
    console.log("connected to MongoDB Done")
})
app.use(cors())
app.use(morgan("common"))
    app.use(bodyParser.json({limit:"50mb"}))

app.use("/fe02-typical",FE02TypicalRouter);
app.use("/fe07-div1",Fe07Div01Router);
app.use("/fe07-div2",Fe07Div02Router);

app.listen(8000, ()=>{
    console.log("server is running......")
});