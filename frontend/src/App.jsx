import CardTotals from "./components/CardTotals";
import DoctorPieChart from "./components/DoctorPieChart";
import PatientStatisticsChart from "./components/PatientStatisticsChart";

const App = () => {
  return (
    <div className='bg-default min-h-screen py-4 px-3'>
      <h1 className='text-2xl font-semibold text-slate-700'>
        Welcome to MMGG!
      </h1>
      <h3 className='text-sm text-slate-500 mt-1'>Hospital Admin Dashboard</h3>
      <div className='flex flex-col gap-5 py-5 md:flex-row w-full'>
        <CardTotals />
        <CardTotals />
        <CardTotals />
        <CardTotals />
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 pb-10 '>
        <PatientStatisticsChart />
        <DoctorPieChart />
      </div>
    </div>
  );
};

export default App;
