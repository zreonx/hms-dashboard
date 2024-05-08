const db = require("../config/db");
const { all } = require("../routes/DashboardRoutes");

const lineChartData = (req, res) => {
  let year = req.body.year;

  console.log(req.body);

  let query = "";
  if (!year || year.toLowerCase() === "all") {
    query = "SELECT * FROM patient";
  } else {
    query = "SELECT * FROM patient WHERE YEAR(date_of_admittance) = ?";
  }

  db.query(query, year ? [year] : [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(JSON.stringify(result));

      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const initializeCounts = () => {
        const counts = {};
        monthNames.forEach((month) => {
          counts[month] = 0;
        });
        return counts;
      };

      const groupByMonth = (data) => {
        const counts = initializeCounts();

        data.forEach((patient) => {
          const date = new Date(patient.date_of_admittance);
          const month = monthNames[date.getMonth()];
          counts[month] += 1;
        });

        return Object.entries(counts).map(([x, y]) => ({ x, y }));
      };

      const groupedData = groupByMonth(data);

      res.status(200).json({
        id: "Patient",
        // count: data.length,
        color: "hsl(230, 70%, 50%)",
        data: groupedData,
      });
    }
  });
};

const pieChartData = (req, res) => {
  db.query(
    `SELECT dept_name, COUNT(*) as department_count FROM doc_dept GROUP BY dept_name;`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const data = JSON.parse(JSON.stringify(result));

        let deptData = [];
        data.forEach((dept) => {
          const id = dept.dept_name;
          const label = dept.dept_name;
          const value = dept.department_count;

          deptData.push({ id, label, value });
        });

        res.status(200).json(deptData);
      }
    }
  );
};

module.exports = {
  lineChartData,
  pieChartData,
};
