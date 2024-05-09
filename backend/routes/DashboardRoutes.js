const express = require("express");

const { totals } = require("../controllers/CardTotals");
const {
  lineChartData,
  pieChartData,
  patientDataTable,
  genderDemographicData,
  revenueChartData,
} = require("../controllers/Charts");

const router = express.Router();

router.get("/card-totals", totals);
router.get("/pie-chart", pieChartData);
router.get("/patient-table", patientDataTable);
router.get("/gender-demographic", genderDemographicData);
router.get("/revenue-chart", revenueChartData);
router.post("/line-chart", lineChartData);

module.exports = router;
