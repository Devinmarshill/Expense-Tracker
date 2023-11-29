import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Elijah Holt", "Pamela Washington"],
  ["2021", 200, 400],
  ["2022", 170, 460],
  ["2023", 300, 432],
  ["2024", 650, 540],
  ["2025", 1000, 750]
];

export const options = {
  title: "Expenses",
  curveType: "function",
  legend: { position: "bottom" },
};

export const Expenses = () => {
  return (
<Chart
      chartType="ScatterChart"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />

)}
export default Expenses;