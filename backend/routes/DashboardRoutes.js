const express = require("express");

const { totals } = require("../controllers/CardTotals");
const {
  lineChartData,
  pieChartData,
  patientDataTable,
  genderDemographicData,
} = require("../controllers/Charts");

const router = express.Router();

router.get("/card-totals", totals);
router.post("/line-chart", lineChartData);
router.get("/pie-chart", pieChartData);
router.get("/patient-table", patientDataTable);
router.get("/gender-demographic", genderDemographicData);

module.exports = router;
