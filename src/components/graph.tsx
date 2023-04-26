import Chart from "chart.js/auto";
import { CategoryScale, Filler } from "chart.js";
import { useState } from "react";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";



Chart.register(CategoryScale);
Chart.register(Filler);

export const Graph = () => {
 const [loading, data, error, request] = useAxios<IJsonResponse>(
  {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
);
  // function value(){
  //   for(const key in data?.graph_data.views){
      
  //     {key}: data?.graph_data.views[key]
  //   }
  // }
  const view = data?.graph_data.views
  const keys = Object.keys(view);
  const values = Object.values(view);
    const [chartData, setChartData] = useState({
        labels: [keys.forEach(val => val)], 
        datasets: [
          {
            label: "Page Views",
            data:[values.forEach(val => val)] ,
            backgroundColor: [
                "#599EEA",
                
            ],
            fill: 'origin',
            borderColor: "none",
            borderWidth: 2
          },
        ]
      });

    return {chartData}
}