import CardTotals from "./components/CardTotals";
import PatientStatisticsChart from "./components/PatientStatisticsChart";

const App = () => {
  return (
    <>
      {/* <div className='flex flex-row gap-5 p-5 max-md:flex-col'>
        <CardTotals />
        <CardTotals />
        <CardTotals />
        <CardTotals />
      </div> */}
      <div>
        <div>
          <PatientStatisticsChart />
        </div>
        <div>Pie chart</div>
      </div>
    </>
  );
};

export default App;
