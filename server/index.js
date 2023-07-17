require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const app = express();
const port = 3000;

const weather = require("./weather");

app.use(express.json());

app.use(cors());

const limiter = rateLimit({
    windowMs: 1000,
    max: 1
})

app.use(limiter);

// test route
app.get("/", (req, res) => res.json({ success: "Hello World!"}));

app.use("/weather", weather);

app.listen(port, () => console.log(`App listening on port ${port}`))