import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";



Chart.register(CategoryScale);


export const PieChartII = () => {
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );

    var chartData = {
        labels: data?.top_sources.map((item) => item.source), 
        datasets: [
          {
            label: "Countries",
            data: data?.top_sources.map((item) => item.percent),
            backgroundColor: [
                "#599EEA",
                "#844FF6",
                "#0FB77A",
                "#FAB70A",
                "#F09468"
            ],
            //hoverOffset: 4
          }
        ]
      };
  return (
    <div style={{ width: 300 }}>
            <Doughnut
        data={chartData}
        options={{
         responsive: true,
         plugins: {
           legend: {
             position: 'left',
           },
           title: {
              display: true,
            }
          }
        }}
      />
            </div>
  )
}