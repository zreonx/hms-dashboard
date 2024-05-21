import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  cardData,
  patientTableData,
  lineChartData,
  pieChartData,
  revenueData,
  genderDemographicData,
} from "../data/data";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const RawData = () => {
  const [visibleData, setVisibleData] = useState(null);
  const navigate = useNavigate();

  const { data: cardJson, isLoading: cardIsLoading } = cardData();
  const { data: tableJson, isLoading: tableIsLoading } = patientTableData();
  const { data: lineJson, isLoading: lineIsLoading } = lineChartData("All");
  const { data: pieJson, isLoading: pieIsLoading } = pieChartData();
  const { data: barJson, isLoading: barIsLoading } = revenueData();
  const { data: genderJson, isLoading: genderIsLoading } =
    genderDemographicData();

  const handleVisibleDataChange = (dataType) => {
    if (visibleData === dataType) {
      setVisibleData(null);
    } else {
      setVisibleData(dataType);
    }
  };

  return (
    <div className='px-5'>
      <div className='border rounded-lg mt-5 bg-white pb-5 px-5 '>
        <div className=' flex flex-row justify-between pt-5 pb-3'>
          <Breadcrumbs
            itemClasses={{
              item: "text-lg font-medium",
              separator: "text-lg font-medium",
            }}
            variant='light'
            size='lg'
            color='foreground'
            onAction={() => navigate("/")}
          >
            <BreadcrumbItem href='/'>Dashboard</BreadcrumbItem>
            <BreadcrumbItem>Raw Data</BreadcrumbItem>
          </Breadcrumbs>
          {/* <h3 className=' font-semibold text-slate-600'>Chart Raw Data</h3> */}
        </div>
        <div className='flex gap-4 sm:flex-wrap sm:flex-row flex-col sm:w-100'>
          <button
            className={`border rounded-md p-5 ${
              visibleData === "card"
                ? "bg-blue-400 text-white"
                : "bg-blue-200 text-black"
            }`}
            onClick={() => handleVisibleDataChange("card")}
          >
            Totals Raw Data
          </button>
          <button
            className={`border rounded-md p-5 ${
              visibleData === "table"
                ? "bg-blue-400 text-white"
                : "bg-blue-200 text-black"
            }`}
            onClick={() => handleVisibleDataChange("table")}
          >
            Table Raw Data
          </button>
          <button
            className={`border rounded-md p-5 ${
              visibleData === "line"
                ? "bg-blue-400 text-white"
                : "bg-blue-200 text-black"
            }`}
            onClick={() => handleVisibleDataChange("line")}
          >
            Line Chart Raw Data
          </button>
          <button
            className={`border rounded-md p-5 ${
              visibleData === "pie"
                ? "bg-blue-400 text-white"
                : "bg-blue-200 text-black"
            }`}
            onClick={() => handleVisibleDataChange("pie")}
          >
            Pie Chart Raw Data
          </button>
          <button
            className={`border rounded-md p-5 ${
              visibleData === "bar"
                ? "bg-blue-400 text-white"
                : "bg-blue-200 text-black"
            }`}
            onClick={() => handleVisibleDataChange("bar")}
          >
            Bar Graph Raw Data
          </button>
          <button
            className={`border rounded-md p-5 ${
              visibleData === "gender"
                ? "bg-blue-400 text-white"
                : "bg-blue-200 text-black"
            }`}
            onClick={() => handleVisibleDataChange("gender")}
          >
            Gender Demographic Raw Data
          </button>
        </div>
      </div>
      {visibleData === "card" && (
        <>
          {cardIsLoading && <h1 className='mt-5 text-xl'>Loading...</h1>}
          {cardJson && (
            <div className='p-5 bg-gray-100 mt-4 rounded-md'>
              <h3 className='font-medium text-lg'>Totals Raw Data</h3>
              <SyntaxHighlighter
                language='json'
                style={github}
                customStyle={{
                  padding: "12px 16px",
                  background: "transparent",
                }}
              >
                {JSON.stringify(cardJson, null, 2)}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
      {visibleData === "table" && (
        <>
          {tableIsLoading && <h1 className='mt-5 text-xl'>Loading...</h1>}
          {tableJson && (
            <div className='p-5 bg-gray-100 mt-4 rounded-md'>
              <h3 className='font-medium text-lg'>Table Raw Data</h3>
              <SyntaxHighlighter
                language='json'
                style={github}
                customStyle={{
                  padding: "12px 16px",
                  background: "transparent",
                }}
              >
                {JSON.stringify(tableJson, null, 2)}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
      {visibleData === "line" && (
        <>
          {lineIsLoading && <h1 className='mt-5 text-xl'>Loading...</h1>}
          {lineJson && (
            <div className='p-5 bg-gray-100 mt-4 rounded-md'>
              <h3 className='font-medium text-lg'>Line Raw Data</h3>
              <SyntaxHighlighter
                language='json'
                style={github}
                customStyle={{
                  padding: "12px 16px",
                  background: "transparent",
                }}
              >
                {JSON.stringify(lineJson, null, 2)}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
      {visibleData === "pie" && (
        <>
          {pieIsLoading && <h1 className='mt-5 text-xl'>Loading...</h1>}
          {pieJson && (
            <div className='p-5 bg-gray-100 mt-4 rounded-md'>
              <h3 className='font-medium text-lg'>Pie Raw Data</h3>
              <SyntaxHighlighter
                language='json'
                style={github}
                customStyle={{
                  padding: "12px 16px",
                  background: "transparent",
                }}
              >
                {JSON.stringify(pieJson, null, 2)}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
      {visibleData === "bar" && (
        <>
          {barIsLoading && <h1 className='mt-5 text-xl'>Loading...</h1>}
          {barJson && (
            <div className='p-5 bg-gray-100 mt-4 rounded-md'>
              <h3 className='font-medium text-lg'>Bar Raw Data</h3>
              <SyntaxHighlighter
                language='json'
                style={github}
                customStyle={{
                  padding: "12px 16px",
                  background: "transparent",
                }}
              >
                {JSON.stringify(barJson, null, 2)}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
      {visibleData === "gender" && (
        <>
          {genderIsLoading && <h1 className='mt-5 text-xl'>Loading...</h1>}
          {genderJson && (
            <div className='p-5 bg-gray-100 mt-4 rounded-md'>
              <h3 className='font-medium text-lg'>Gender Raw Data</h3>
              <SyntaxHighlighter
                language='json'
                style={github}
                customStyle={{
                  padding: "12px 16px",
                  background: "transparent",
                }}
              >
                {JSON.stringify(genderJson, null, 2)}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RawData;
