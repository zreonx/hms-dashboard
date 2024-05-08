const express = require("express");

const { totals } = require("../controllers/CardTotals");
const { lineChartData } = require("../controllers/Charts");

const router = express.Router();

router.get("/card-totals", totals);
router.post("/line-chart", lineChartData);

module.exports = router;
