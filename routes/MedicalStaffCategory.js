// const express = require("express");
// const { sequelize } = require("../models");
// const router = express.Router();
// const { MedicalStaffCategory } = require("../models");

// router.get("/", async(req, res) => {
//     showCategories = await MedicalStaffCategory.findAll();
//     res.json(showCategories);
// });

// // async and await waiting for the data to be inserting and doing other things
// router.route("/").post((req, res) => {
//     // using sequelize to post data
//     // accessing data
//     // body has data in json
//     const categories = req.body;
//     MedicalStaffCategory.create(categories);
//     res.json(categories);
// });

// module.exports = router;