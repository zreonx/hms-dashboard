import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";
import { genderDemographicData } from "../data/data";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

const GenderPatientChart = () => {
  const { data, isLoading } = genderDemographicData();

  const GenderSpecifics = ({ male, female }) => {
    return (
      <div className='h-36 px-10 py-3 mb-3 '>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 1.1 }}
          className='h-12 bg-neutral-100 rounded-3xl mb-3 flex justify-center items-center'
        >
          <h3 className='font-bold text-2xl text-teal-500'>{male}</h3>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 1.1 }}
          className='h-12 bg-neutral-100 rounded-3xl flex justify-center items-center'
        >
          <h3 className='font-bold text-2xl text-red-300'>{female}</h3>
        </motion.div>
      </div>
    );
  };
  return (
    <div className='bg-white border w-full rounded-lg md:col-auto lg:col-auto relative'>
      <div className='flex flex-row justify-between px-5 py-5 pb-8'>
        <h3 className=' font-semibold text-slate-600'>Gender Demographic</h3>
      </div>

      <div className='grid w-full justify-center items-center'>
        {isLoading ? (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Spinner />
          </div>
        ) : (
          <>
            <div className='flex flex-row gap-5 justify-center items-center pb-5 px-3 '>
              <div className='h-36 w-36 text-7xl text-purple-300'>
                <CircularProgressbarWithChildren
                  strokeWidth={5}
                  value={Math.round(data.female.percentage)}
                  styles={buildStyles({
                    pathColor: "#c5a3e1",
                    trailColor: "#f1f5f9",
                  })}
                >
                  <div className='flex items-center'>
                    <FaFemale />
                    <span className='text-xs'>
                      {Math.round(data.female.percentage)}%
                    </span>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className='h-36 w-36 text-7xl text-teal-200'>
                <CircularProgressbarWithChildren
                  strokeWidth={5}
                  value={Math.round(data.male.percentage)}
                  styles={buildStyles({
                    pathColor: "turquoise",
                    trailColor: "#f1f5f9",
                  })}
                >
                  <div className='flex items-center'>
                    <FaMale />
                    <span className='text-xs'>
                      {Math.round(data.male.percentage)}%
                    </span>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <GenderSpecifics
              male={data.male.number}
              female={data.female.number}
            />
          </>
        )}
      </div>

      {/* <div className='flex gap-8 justify-center pb-5'>
        <div className='h-14 text-5xl flex flex-row gap-2 justify-center items-center'>
          <h1 className='text-pink-400 font-bold'>12</h1>
          <h3 className='text-2xl font-medium'>Female</h3>
        </div>
        <div className='h-14 text-5xl flex flex-col gap-2 justify-center items-center px-4'>
          <h1 className='text-blue-400 font-bold'>50</h1>
          <h3 className='text-2xl font-medium'>Male</h3>
        </div>
      </div> */}
    </div>
  );
};

export default GenderPatientChart;
