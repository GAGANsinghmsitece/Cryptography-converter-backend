var express = require('express');
var router = express.Router();
const {fetchTrendingController}=require("../controllers/fetchTrendingController.js");

/* GET home page. */
router.get('/trending',fetchTrendingController);

module.exports = router;
