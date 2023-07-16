const express = require("express");
const router = express.Router();
const fetch = require("node-fetch")

const fetchWeather = async (searchText) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&appid=${process.env.WEATHER_API_KEY}`
    try {
        const weatherStream = await fetch(url);
        const weatherJson = await weatherStream.json();
        return weatherJson;
    }   catch (err) {
        return { Error: err.stack};
    }
}

router.get("/", (req, res) => {
    res.json({ success: "Hello Weather!" });
});

router.get("/:searchText", async (req, res) => {
    const searchText = req.params.searchText;
    const data = await fetchWeather(searchText);
    res.json(data);
})

router.post("/", async (req, res) => {
    const searchText = req.body.searchText;
    const data = await fetchWeather(searchText);
    res.json(data);
})

module.exports = router;