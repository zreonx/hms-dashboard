const db = require("../config/db");

const totals = (req, res) => {
  db.query(
    "SELECT (SELECT COUNT(emp_id) FROM doctor) AS doctor_count, (SELECT COUNT(emp_id) FROM nurse) AS nurse_count, (SELECT COUNT(patient_id) FROM patient) AS patient_count, (SELECT COUNT(emp_id) FROM employee) AS employee_count",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let data = JSON.parse(JSON.stringify(result));
        res.status(200).send({ data: data });
      }
    }
  );
};

module.exports = {
  totals,
};
