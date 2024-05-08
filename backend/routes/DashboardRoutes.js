const express = require("express");

const { totals } = require("../controllers/CardTotals");
const { lineChartData, pieChartData } = require("../controllers/Charts");

const router = express.Router();

router.get("/card-totals", totals);
router.post("/line-chart", lineChartData);
router.get("/pie-chart", pieChartData);

module.exports = router;
