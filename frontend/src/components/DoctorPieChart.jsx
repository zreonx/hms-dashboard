import { Pie, ResponsivePie } from "@nivo/pie";
import { pieChartData } from "../data/data";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";

const DoctorPieChart = () => {
  const { data: pieChartValues, isLoading } = pieChartData();

  let data = [];
  if (!isLoading) {
    data = [...pieChartValues];
  }
  const PieChart = () => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 100, left: 100 }}
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
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
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
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
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
    <div className='h-[25rem] border rounded-lg bg-white py-5 w-full md:col-auto lg:col-auto'>
      <div className='px-5'>
        <h1 className='font-semibold text-slate-600'>Doctors</h1>
      </div>

      <div className='h-full w-full overflow-hidden flex justify-center items-center'>
        {isLoading ? <Spinner /> : <PieChart />}
      </div>
    </div>
  );
};

export default DoctorPieChart;
