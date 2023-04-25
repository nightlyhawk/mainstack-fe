import Chart from "chart.js/auto";
import { CategoryScale, Filler } from "chart.js";
import { useState } from "react";
import { useFetch } from "./useFetch";
import { data } from "./topSources";



Chart.register(CategoryScale);
Chart.register(Filler);

export const Graph = () => {


    const { data } = useFetch(
        "https://fe-task-api.mainstack.io/", 
    );
    const [chartData, setChartData] = useState({
        labels: data.map((item: any) => item.graph_data.views), 
        datasets: [
          {
            label: "Page Views",
            data: data.map((item: any) => item.graph_data.views.keys.values),
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