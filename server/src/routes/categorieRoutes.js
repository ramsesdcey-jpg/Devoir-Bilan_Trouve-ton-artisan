const express = require("express");
const categorieController = require(
    "../controllers/categorieController"
);

const router = express.Router();

router.get("/", categorieController.getAllCategories);

module.exports = router;