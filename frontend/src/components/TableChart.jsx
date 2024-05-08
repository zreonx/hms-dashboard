import DataTable from "react-data-table-component";
import SearchComponent from "./SearchComponent";
import { useState } from "react";

import { patientTableData } from "../data/data";

const TableChart = () => {
  const { data, isLoading } = patientTableData();

  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Date Admitted",
      selector: (row) => row.admission_date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  let filteredItems;

  if (!isLoading) {
    filteredItems = data.filter((item) => {
      const nameMatches =
        item.name && item.name.toLowerCase().includes(searchText.toLowerCase());
      const ageMatches =
        item.age &&
        item.age.toString().toLowerCase().includes(searchText.toLowerCase());
      const genderMatches =
        item.gender &&
        item.gender.toLowerCase().includes(searchText.toLowerCase());
      const dateAdmittedMatches =
        item.admission_date &&
        item.admission_date.toLowerCase().includes(searchText.toLowerCase());
      const statusMatches =
        item.status &&
        item.status.toLowerCase().includes(searchText.toLowerCase());

      return (
        nameMatches ||
        ageMatches ||
        genderMatches ||
        dateAdmittedMatches ||
        statusMatches
      );
    });
  }

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
      {!isLoading && (
        <DataTable columns={columns} data={filteredItems} pagination />
      )}
    </div>
  );
};

export default TableChart;
