import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";



Chart.register(CategoryScale);

export const Graph = () => {
 const [loading, data, error, request] = useAxios<IJsonResponse>(
  {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
);
  
  const view = data?.graph_data.views;
    var chartData = {
        labels: Object.keys({view}), 
        datasets: [
          {
            label: "Page Views",
            data: Object.values({view}),
            backgroundColor: [
                "#f9d2c0",
                
            ],
            fill: true,
            borderColor: "#599EEA",
            tension: 0.2,
          },
        ]
      };

      return (
        <div className="chart-container">
          <h2 style={{ textAlign: "left" }}>Page Views</h2>
          <h4>All time</h4>
          <h1 style={{ textAlign: "left" }}>500</h1>
          <div style={{ width: 700 }}>
          <Line
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                },
                legend: {
                  display: false
                }
              }
            }}
          />
          </div>
        </div>
      );
}