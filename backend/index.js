const express = require("express");
const cors = require("cors");
const router = require("./routes/router")
const session = require('./middleware/session');
const connectDB = require("./config/db");
const bp = require('body-parser')
require('dotenv/config');

const port = process.env.PORT || 3001;

// connecting to database
connectDB();

const app = express();


app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(session)
app.use("/",router)


app.get("/", (req, res) => {
    res.send("APIs working properly");
  });

app.listen(port, () => console.log(`APIs listening on port ${port}!`));

