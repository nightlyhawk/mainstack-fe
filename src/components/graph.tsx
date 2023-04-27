import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";
import { views } from "./topSources";
import { useState } from "react";



Chart.register(CategoryScale);

export const Graph = () => {
 const [loading, data, error, request] = useAxios<IJsonResponse>(
  {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
);
  function check(){
    if(data){
      let view = data.graph_data.views
   
       console.log(view)
       var chartData = {
            labels: Object.keys(view),
            datasets: [
              {
                label: "Page Views",
                data: Object.values(view),
                backgroundColor: [
                    "#f9d2c0",
                    
                ],
                fill: true,
                borderColor: "#ff5403",
                tension: 0.2,
              },
            ]
          };
          return chartData
  }}
  var cult = check()

      return (
        <div className="chart-container">
         {cult
         ? <>
           <h2 style={{ textAlign: "left" }}>Page Views</h2>
          <h4 style={{ color: "gray" }}>All time</h4>
          <h1 style={{ textAlign: "left" }}>500</h1>
          <div style={{ width: 700 }}>
          <Line
            data= { cult }
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
         </>
         : <div>data is missing</div> }
        </div>
      );
}
