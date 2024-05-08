import CardTotals from "./components/CardTotals";
import DoctorPieChart from "./components/DoctorPieChart";
import GenderPatientChart from "./components/GenderPatientChart";
import PatientStatisticsChart from "./components/PatientStatisticsChart";
import RevenueChart from "./components/RevenueChart";
import TableChart from "./components/TableChart";

import { cardData } from "./data/data";

const App = () => {
  const { data: totalCards, isLoading } = cardData();

  return (
    <div className='light bg-default min-h-screen py-4 px-6'>
      <h1 className='text-2xl font-semibold text-slate-700'>
        Welcome to MMGG!
      </h1>
      <h3 className='text-sm text-slate-500 mt-1'>Hospital Admin Dashboard</h3>
      <div className='flex flex-col gap-4 py-5 md:flex-row w-full'>
        {!isLoading &&
          totalCards.data.map((card, index) => {
            return <CardTotals data={card} key={index} />;
          })}
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 '>
        <PatientStatisticsChart />
        <DoctorPieChart />
      </div>

      <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4'>
        <GenderPatientChart />
        <RevenueChart />
      </div>

      <div className='border bg-white rounded-lg'>
        <TableChart />
      </div>

      <div></div>
    </div>
  );
};

export default App;
