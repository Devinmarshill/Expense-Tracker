import React from "react";
import { Chart } from "react-google-charts";


export const Expenses = () => {
  return (
<Chart
  chartType="ScatterChart"
  data={[["First Name", "Last Name", "Expenses"], 
  ["Pamela", "Washington", 1500], 
  ["Elijah", "Holt", 2000],
  [3],
]}
  width="1000px"
  height="1000px"
  legendToggle
/>

)}
export default Expenses;