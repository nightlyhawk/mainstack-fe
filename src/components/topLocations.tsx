import { useAxios } from './useAxios';
import { Doughnut } from "react-chartjs-2";
import { IJsonResponse } from "./topSources";
import { PieChartI } from "./pieChart";
import { Chart } from 'chart.js/auto'



export const TopLocations: React.FunctionComponent = () => {

  const { chartData } = PieChartI();
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );


    return (
         <div className="circleChart, left">
            <div className="text">
            <h3>Top Locations</h3>
            { data &&  data.top_locations.map((item) => {
              return (
                <p> 
                 {item.country}
                   <span>{item.count}</span>
                 </p>
            )}) }
            </div>
            <div className="chart">
                <h3>View full report</h3>
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
            </div>

         </div>
    )
}