import DataTable from "react-data-table-component";
import SearchComponent from "./SearchComponent";
import { useState } from "react";

const TableChart = () => {
  const [searchText, setSearchText] = useState("");
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

  const filteredItems = data.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='rounded-lg px-5 pb-5'>
      <div className='flex flex-col gap-2 md:flex-row justify-between pt-5 pb-1'>
        <h3 className=' font-semibold text-slate-600'>Patient Information</h3>
        <div className='ml-auto'>
          <SearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
      </div>
      <DataTable columns={columns} data={filteredItems} pagination />
    </div>
  );
};

export default TableChart;
