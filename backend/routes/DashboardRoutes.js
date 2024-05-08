const express = require("express");

const { totals } = require("../controllers/CardTotals");

const router = express.Router();

router.get("/card-totals", totals);

module.exports = router;
