import CardTotals from "./components/CardTotals";
import DoctorPieChart from "./components/DoctorPieChart";
import GenderPatientChart from "./components/GenderPatientChart";
import PatientStatisticsChart from "./components/PatientStatisticsChart";
import RevenueChart from "./components/RevenueChart";
import TableChart from "./components/TableChart";
import { Skeleton } from "@nextui-org/react";

import { cardData } from "./data/data";

const App = () => {
  const { data: totalCards, isLoading } = cardData();
  const skeletons = Array.from({ length: 4 }, (_, index) => (
    <div key={index} className='p-5 w-full border bg-white rounded-lg'>
      <div className='max-w-[300px] w-full flex items-center gap-3'>
        <div>
          <Skeleton className='flex rounded-full w-12 h-12' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <Skeleton className='h-3 w-3/5 rounded-lg' />
          <Skeleton className='h-3 w-4/5 rounded-lg' />
        </div>
      </div>
    </div>
  ));
  return (
    <div className='bg-default min-h-screen py-4 px-6'>
      <h1 className='text-2xl font-semibold text-slate-700'>
        Welcome to MMGG Hospital
      </h1>
      <h3 className='text-sm text-slate-500 mt-1'>Hospital Admin Dashboard</h3>
      <div className='flex flex-col gap-4 py-5 md:flex-row w-full'>
        {isLoading ? (
          <>{skeletons}</>
        ) : (
          totalCards.data.map((card, index) => {
            return <CardTotals data={card} key={index} />;
          })
        )}
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
