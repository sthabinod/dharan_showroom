const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();

const { Categories } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.route("/").get(validateToken, async(req, res) => {
    showCategories = await Categories.findAll();
    res.json(showCategories);
});

router.route("/").post(validateToken, async(req, res) => {
    // using sequelize to post data
    // accessing data
    // body has data in json
    const categories = req.body;
    Categories.create(Categories);
    res.json(categories);
});

module.exports = router;