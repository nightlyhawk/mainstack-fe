import { Pie } from "react-chartjs-2";
import { Graph } from "./graph";

export  const Chart = () => {
const { chartData } = Graph();
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Page Views</h2>
      <h4>All time</h4>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            }
          }
        }}
      />
    </div>
  );
}
