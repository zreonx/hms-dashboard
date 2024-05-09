import { ResponsiveBar } from "@nivo/bar";
import { Spinner } from "@nextui-org/react";

import { revenueData } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const RevenueChart = () => {
  const { data: revenueChartData, isLoading } = revenueData();
  const { pathname } = useLocation();
  const tickFormatter = (value) => {
    return `${value / 1000}k`;
  };

  const Bar = () => {
    return (
      <ResponsiveBar
        data={revenueChartData}
        keys={["revenue"]}
        indexBy='year'
        borderRadius={4}
        margin={{ top: 30, right: 50, bottom: 50, left: 80 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors='#3182CE'
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 12,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickValues: [50000, 150000, 250000, 350000, 500000],
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
          format: tickFormatter,
        }}
      />
    );
  };

  return (
    <div
      className={`${
        pathname != "/" ? "h-full" : "h-[25rem]"
      } border rounded-lg flex w-full flex-col bg-white col-auto lg:col-span-2 `}
    >
      <div className='flex flex-row justify-between px-5 pt-5'>
        <h3 className=' font-semibold text-slate-600'>Revenue</h3>
        <Link
          to='bar-chart'
          className={` text-slate-300 hover:text-slate-500 ${
            pathname != "/" ? "hidden" : ""
          }`}
        >
          <FiExternalLink />
        </Link>
      </div>

      <div className='w-full h-full overflow-hidden flex justify-center items-center'>
        {isLoading ? <Spinner /> : <Bar />}
      </div>
    </div>
  );
};

export default RevenueChart;
