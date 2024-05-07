import { Pie, ResponsivePie } from "@nivo/pie";
const data = [
  {
    id: "lisp",
    label: "lisp",
    value: 59,
    color: "hsl(195, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 395,
    color: "hsl(70, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 555,
    color: "hsl(211, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 314,
    color: "hsl(205, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 325,
    color: "hsl(206, 70%, 50%)",
  },
];
const DoctorPieChart = () => {
  const PieChart = () => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
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
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
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
          itemWidth: 72,
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
    <div className='h-[25rem] border rounded-lg bg-white p-5 w-full md:col-auto lg:col-auto'>
      <div className=' '>
        <h1 className='font-semibold text-slate-600'>Pie chart</h1>
      </div>

      <div className='h-full w-full overflow-hidden'>
        <PieChart />
      </div>
    </div>
  );
};

export default DoctorPieChart;
