import { Pie, ResponsivePie } from "@nivo/pie";
import { pieChartData } from "../data/data";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";

import { FiExternalLink } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const DoctorPieChart = () => {
  const { data: pieChartValues, isLoading } = pieChartData();
  const { pathname } = useLocation();

  console.log(location);
  let data = [];
  if (!isLoading) {
    data = [...pieChartValues];
  }
  const PieChart = () => (
    <ResponsivePie
      data={pieChartValues}
      margin={{ top: 40, right: 80, bottom: 100, left: 120 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "purple_blue" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor='#333333'
      arcLinkLabelsThickness={1}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={0}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: -25,
          translateY: 60,
          itemsSpacing: 0,
          itemWidth: 75,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "top-to-bottom",
          itemOpacity: 1,
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      <div
        className={`${
          pathname != "/" ? "h-full" : "h-[25rem]"
        } border rounded-lg bg-white py-5 w-full md:col-auto lg:col-auto`}
      >
        <div className='px-5 flex justify-between'>
          <h1 className={`font-semibold text-slate-600`}>Doctors</h1>
          <Link
            to='pie-chart'
            className={` text-slate-300 hover:text-slate-500 ${
              pathname != "/" ? "hidden" : ""
            }`}
          >
            <FiExternalLink />
          </Link>
        </div>

        <div className='h-full w-full overflow-hidden flex justify-center items-center'>
          {isLoading ? <Spinner /> : <PieChart />}
        </div>
      </div>
    </>
  );
};

export default DoctorPieChart;
