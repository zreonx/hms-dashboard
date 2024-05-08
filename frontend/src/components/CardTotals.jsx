import { motion } from "framer-motion";

import { FaUserInjured } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { PiDoorFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";

const iconMap = {
  FaUserInjured: <FaUserInjured />,
  FaUserNurse: <FaUserNurse />,
  PiDoorFill: <PiDoorFill />,
  IoPeopleSharp: <IoPeopleSharp />,
};

const CardTotals = ({ data }) => {
  const { label, number, icon } = data;

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <motion.div
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.1 },
        boxShadow: "2px 3px 6px 1px rgba(0, 0, 0, 0.05)",
      }}
      whileTap={{ scale: 1.025 }}
      className='p-5 border shadow-sm rounded-lg bg-white w-100 w-full'
    >
      <div className='flex flex-row gap-5 justify-start items-center'>
        <div className='h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center p-5'>
          <span className='text-2xl text-slate-100'>{iconMap[icon]}</span>
        </div>
        <div>
          <h3>Total {capitalizeFirstLetter(label)}</h3>
          <span className='text-2xl font-medium'>{number}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardTotals;
