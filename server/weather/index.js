const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json({ success: "Hello Weather!" });
});

module.exports = router;