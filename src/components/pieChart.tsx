
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";



Chart.register(CategoryScale);


export const PieChartI = () => {
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );

    const [chartData, setChartData] = useState({
        labels: data?.top_locations.map((item) => item.country), 
        datasets: [
          {
            label: "Countries",
            data: data?.top_locations.map((item) => item.percent),
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
      });
  return {chartData}
}