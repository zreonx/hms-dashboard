import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PieChart from "./pages/PieChart";
import BarChart from "./pages/BarChart";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pie-chart' element={<PieChart />} />
      <Route path='/bar-chart' element={<BarChart />} />
    </Routes>
  );
};

export default App;
