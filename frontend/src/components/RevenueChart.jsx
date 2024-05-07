import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    year: "2022",
    revenue: 80000,
  },
  {
    year: "2021",
    revenue: 10000,
  },
  {
    year: "2020",
    revenue: 40000,
  },
];

const RevenueChart = () => {
  const tickFormatter = (value) => {
    return `${value / 1000}k`;
  };
  const Bar = () => {
    return (
      <ResponsiveBar
        data={data}
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
          tickValues: [10000, 30000, 50000, 70000, 900000, 110000],
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
    <div className='h-[25rem] border rounded-lg flex w-full flex-col bg-white col-auto lg:col-span-2'>
      <div className='flex flex-row justify-between px-5 pt-5'>
        <h3 className=' font-semibold text-slate-600'>Revenue</h3>
      </div>

      <div className='w-full h-full overflow-hidden'>
        <Bar />
      </div>
    </div>
  );
};

export default RevenueChart;
