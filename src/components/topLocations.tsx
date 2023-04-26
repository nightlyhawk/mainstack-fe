import { useAxios } from './useAxios';
import { Doughnut } from "react-chartjs-2";
import { IJsonResponse } from "./topSources";
import { PieChartI } from "./pieChart";



export const TopLocations: React.FunctionComponent = () => {

  const { chartData } = PieChartI();
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );


    return (
         <div className="circleChart, left">
            <h1>Top Locations</h1>
            <div className="text">
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
            <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            }
          }
        }}
      />
            </div>

         </div>
    )
}