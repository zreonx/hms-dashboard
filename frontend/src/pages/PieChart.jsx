import React from "react";
import DoctorPieChart from "../components/DoctorPieChart";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const PieChart = () => {
  return (
    <div className='h-[92vh] flex p-5 pt-0 flex-col'>
      <Link
        to='/'
        className={` text-slate-300 hover:text-slate-500 py-3  border rounded block w-36 border-0 flex items-center gap-2`}
      >
        <BiArrowBack />
        Back
      </Link>
      <DoctorPieChart />
    </div>
  );
};

export default PieChart;
