import { Chart } from "react-google-charts";


const Expenses = () => {
  return (
<Chart
  chartType="ScatterChart"
  data={[["First Name", "Last Name", "Expenses"], [], [2]]}
  width="100%"
  height="400px"
  legendToggle
/>

)}
export default Expenses;