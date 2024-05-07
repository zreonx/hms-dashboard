import DataTable from "react-data-table-component";

const TableChart = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Date Admitted",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div className='rounded-lg px-5 pb-5'>
      <div className='flex flex-row justify-between py-5'>
        <h3 className=' font-semibold text-slate-600'>Patient Information</h3>
      </div>
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
};

export default TableChart;
