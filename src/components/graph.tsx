import Chart from "chart.js/auto";
import { CategoryScale, Filler } from "chart.js";
import { useState } from "react";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";
import { isObject } from "chart.js/dist/helpers/helpers.core";



Chart.register(CategoryScale);
Chart.register(Filler);

export const Graph = () => {
 const [loading, data, error, request] = useAxios<IJsonResponse>(
  {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
);
  
  const view = data?.graph_data.views;
    const [chartData, setChartData] = useState({
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
      });

    return {chartData}
}