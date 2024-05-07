import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

const GenderPatientChart = () => {
  return (
    <div className='bg-white border w-full rounded-lg md:col-auto lg:col-auto'>
      <div className='flex flex-row justify-between px-5 py-5 pb-8'>
        <h3 className=' font-semibold text-slate-600'>Gender Demographic</h3>
      </div>

      <div className='flex flex-row gap-5 justify-center items-center pb-5 px-3 '>
        <div className='h-36 w-36 text-7xl text-purple-300'>
          <CircularProgressbarWithChildren
            strokeWidth={5}
            value={66}
            styles={buildStyles({
              pathColor: "#c5a3e1",
              trailColor: "#f1f5f9",
            })}
          >
            <div className='flex items-center'>
              <FaFemale />
              <span className='text-xs'>80%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className='h-36 w-36 text-7xl text-teal-200'>
          <CircularProgressbarWithChildren
            strokeWidth={5}
            value={44}
            styles={buildStyles({
              pathColor: "turquoise",
              trailColor: "#f1f5f9",
            })}
          >
            <div className='flex items-center'>
              <FaMale />
              <span className='text-xs'>40%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className='flex gap-8 justify-center pb-5'>
        <div className='h-14 text-5xl flex flex-row gap-2 justify-center items-center'>
          <h1 className='text-pink-400 font-bold'>12</h1>
          <h3 className='text-2xl font-medium'>Female</h3>
        </div>
        <div className='h-14 text-5xl flex flex-row gap-2 justify-center items-center '>
          <h1 className='text-blue-400 font-bold'>50</h1>
          <h3 className='text-2xl font-medium'>Male</h3>
        </div>
      </div>
    </div>
  );
};

export default GenderPatientChart;
