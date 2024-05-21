import CardTotals from "../components/CardTotals";
import DoctorPieChart from "../components/DoctorPieChart";
import GenderPatientChart from "../components/GenderPatientChart";
import PatientStatisticsChart from "../components/PatientStatisticsChart";
import RevenueChart from "../components/RevenueChart";
import TableChart from "../components/TableChart";
import { Skeleton } from "@nextui-org/react";

import { cardData } from "../data/data";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const fetchDataAndOpenNewTab = async () => {
    try {
      const response = await axios.post(
        "https://hms-dashboard-api.vercel.app/api/line-chart",
        {
          year: "2020",
        }
      );

      const data = response.data;
      const newTab = window.open();

      newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Line Chart Data</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { color: #333; }
            pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <a href="https://hms-dashboard-seven.vercel.app/" style="padding: 12px 24px; border: 1px solid gray; background-color: white; text-decoration: none; border-radius: 5px">Back</a>
          <h2>Line Chart Raw Data:</h2>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </body>
        </html>
      `);
      newTab.document.close();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

      <div className='border rounded-lg mt-5 bg-white pb-5 px-5 '>
        <div className=' flex flex-row justify-between pt-5 pb-3'>
          <h3 className=' font-semibold text-slate-600'>Chart Raw Data</h3>
        </div>
        <div className='flex gap-4 sm:flex-wrap sm:flex-row flex-col sm:w-100'>
          <Link
            className='border bg-blue-200 rounded-md p-5'
            to='https://hms-dashboard-api.vercel.app/api/patient-table'
          >
            Totals Raw Data
          </Link>
          <Link
            className='border bg-blue-200 rounded-md p-5'
            to='https://hms-dashboard-api.vercel.app/api/patient-table'
          >
            Table Raw Data
          </Link>
          <Link
            className='border bg-blue-200 rounded-md p-5'
            onClick={(e) => {
              e.preventDefault();
              fetchDataAndOpenNewTab();
            }}
          >
            Line Chart Raw Data
          </Link>
          <Link
            className='border bg-blue-200 rounded-md p-5'
            to='https://hms-dashboard-api.vercel.app/api/pie-chart'
          >
            Pie Chart Raw Data
          </Link>
          <Link
            className='border bg-blue-200 rounded-md p-5'
            to='https://hms-dashboard-api.vercel.app/api/revenue-chart'
          >
            Bar Graph Raw Data
          </Link>
          <Link
            className='border bg-blue-200 rounded-md p-5'
            to='https://hms-dashboard-api.vercel.app/api/gender-demographic'
          >
            Gender Demographic Raw Data
          </Link>
        </div>
      </div>
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

export default Home;
