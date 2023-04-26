import Chart from "chart.js/auto";
import { CategoryScale, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";



Chart.register(CategoryScale);
Chart.register(Filler);

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
            fill: 'origin',
            borderColor: "#599EEA",
            borderWidth: 2
          },
        ]
      };

      return (
        <div className="chart-container">
          <h2 style={{ textAlign: "center" }}>Page Views</h2>
          <h4>All time</h4>
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