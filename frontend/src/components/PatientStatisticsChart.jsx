import { ResponsiveLine } from "@nivo/line";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { lineChartData } from "../data/data";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";

const PatientStatisticsChart = () => {
  const [filter, setFilter] = useState("All");

  const { data: test, isLoading } = lineChartData(filter);

  let data = [];

  if (!isLoading) {
    data = [test];
  }

  let years = [];
  let startYear = 2020;
  const currentYear = new Date().getFullYear();

  while (startYear <= currentYear) {
    years.push(startYear);
    startYear++;
  }

  const LineChart = () => (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 40, bottom: 50, left: 40 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=' >-.2f'
      curve='basis'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
        legendPosition: "left",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickValues: [0, 1, 2, 3, 5],
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      enableCrosshair={false}
      enableGridY={false}
      colors={["#6ac5fe"]}
      colorBy='index'
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel='data.yFormatted'
      pointLabelYOffset={-100}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );

  return (
    <div className='h-[25rem] border rounded-lg flex w-full flex-col bg-white col-auto lg:col-span-2'>
      <div className='flex flex-row justify-between px-5 py-5'>
        <h3 className=' font-semibold text-slate-600'>Patient Statistic</h3>
        <Select
          placeholder='Yearly'
          className='max-w-[10rem] '
          color='primary'
          variant='flat'
          onChange={(e) => setFilter(e.target.value)}
        >
          <SelectItem
            key='All'
            className='hover:!bg-slate-100 focus:!bg-slate-100'
          >
            All
          </SelectItem>

          {years.map((year) => {
            return (
              <SelectItem
                key={year}
                className='hover:!bg-slate-100 focus:!bg-slate-100'
              >
                {year}
              </SelectItem>
            );
          })}
        </Select>
      </div>

      <div className='h-[25rem] w-full overflow-hidden flex justify-center items-center'>
        {isLoading ? <Spinner /> : <LineChart data={data} />}
      </div>
    </div>
  );
};

export default PatientStatisticsChart;
