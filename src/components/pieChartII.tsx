import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";



Chart.register(CategoryScale);


export const PieChartII = () => {
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );

    const [chartData, setChartData] = useState({
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
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
  return {chartData}
}