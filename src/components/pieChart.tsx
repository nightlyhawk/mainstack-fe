
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { useFetch } from "./useFetch";
import { data } from "./topSources";



Chart.register(CategoryScale);


export const PieChartI = () => {
    const { data } = useFetch(
        "https://fe-task-api.mainstack.io/", 
    );
    const [chartData, setChartData] = useState({
        labels: data.map((item: data) => item.top_locations.country), 
        datasets: [
          {
            label: "Countries",
            data: data.map((item: data) => item.top_locations.percent),
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