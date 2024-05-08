const db = require("../config/db");

const totals = (req, res) => {
  db.query(
    "SELECT (SELECT COUNT(emp_id) FROM nurse) AS nurse_count, (SELECT COUNT(patient_id) FROM patient) AS patient_count, (SELECT COUNT(emp_id) FROM employee) AS employee_count, (SELECT COUNT(room_no) FROM room) AS room_count",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let data = JSON.parse(JSON.stringify(result));

        res.status(200).json({
          data: [
            {
              label: "patients",
              number: data[0].patient_count,
              icon: "FaUserInjured",
            },
            { label: "rooms", number: data[0].room_count, icon: "PiDoorFill" },
            {
              label: "nurses",
              number: data[0].nurse_count,
              icon: "FaUserNurse",
            },
            {
              label: "employee",
              number: data[0].employee_count,
              icon: "IoPeopleSharp",
            },
          ],
        });
      }
    }
  );
};

module.exports = {
  totals,
};
