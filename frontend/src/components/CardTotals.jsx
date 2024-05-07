import { motion } from "framer-motion";

const CardTotals = ({ data }) => {
  const { label, number, url } = data;

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
          <span className='text-2xl text-slate-100'>{url}</span>
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
