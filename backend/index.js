const express = require("express");
const cors = require("cors");

const app = express();

const DashboardRouter = require("./routes/DashboardRoutes");

const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/api/", DashboardRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}...`);
});
