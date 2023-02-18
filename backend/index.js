const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 3001;

// connecting to database
connectDB();

const app = express();


app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("APIs working properly");
  });

app.listen(port, () => console.log(`APIs listening on port ${port}!`));

