import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Patient",
    color: "hsl(230, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 65,
      },
      {
        x: "Feb",
        y: 242,
      },
      {
        x: "Mar",
        y: 91,
      },
      {
        x: "April",
        y: 2,
      },
      {
        x: "May",
        y: 193,
      },
      {
        x: "June",
        y: 247,
      },
      {
        x: "July",
        y: 198,
      },
      {
        x: "Aug",
        y: 253,
      },
      {
        x: "Sept",
        y: 155,
      },
      {
        x: "Oct",
        y: 257,
      },
      {
        x: "Nov",
        y: 275,
      },
      {
        x: "Dec",
        y: 135,
      },
    ],
  },
];
const PatientStatisticsChart = () => {
  const LineChart = ({ data }) => (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 60, bottom: 50, left: 60 }}
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
        tickValues: [10, 50, 100, 150, 200, 250],
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
      </div>

      <div className='h-[25rem] w-full overflow-hidden'>
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default PatientStatisticsChart;
