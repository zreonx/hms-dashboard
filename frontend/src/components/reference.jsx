import { ResponsiveBar } from '@nivo/bar' 
const data = [
    {
      month: "Jan",
      patient: 100
    },
    {
      month: "Feb",
      patient: 150
    },
    {
      month: "Mar",
      patient: 20
    },
    {
      month: "April",
      patient: 78
    },
    {
      month: "May",
      patient: 71
    },
    {
      month: "June",
      patient: 56
    },
    {
      month: "July",
      patient: 1
    }
  ];
const PatientStatisticsChart = () => {
    const Bar = () => {
        return (
          <ResponsiveBar
            data={data}
            keys={["patient"]}
            indexBy="month"
            margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="#3182CE"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Number of patients",
              legendPosition: "middle",
              legendOffset: -55
            }}
          />
        );
      };
  return (

    <div className='h-[500px] border rounded-lg flex flex-col justify-center align-center'>
     <Bar/>
    </div>
  )
}

export default PatientStatisticsChart
