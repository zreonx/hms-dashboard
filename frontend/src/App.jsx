import CardTotals from "./components/CardTotals";
import PatientStatisticsChart from "./components/PatientStatisticsChart";

const App = () => {
  return (
    <div className='bg-default h-screen py-4 px-3'>
      <h1 className='text-2xl font-semibold text-slate-700'>
        Welcome to MMGG!
      </h1>
      <h3 className='text-sm text-slate-500 mt-1'>Hospital Admin Dashboard</h3>
      <div className='flex flex-col gap-5 py-5 md:flex-row'>
        <CardTotals />
        <CardTotals />
        <CardTotals />
        <CardTotals />
      </div>

      <div className='flex justify-center align-center w-auto gap-4 flex-col md:flex-row'>
        <PatientStatisticsChart />
        <div className=' border rounded-lg  bg-white p-5'>
          <h1>Pie chart</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
