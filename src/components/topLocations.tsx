import { useAxios } from './useAxios';
import { Pie } from "react-chartjs-2";
import { IJsonResponse } from "./topSources";
import { PieChartI } from "./pieChart";



export const TopLocations: React.FunctionComponent = () => {

  const { chartData } = PieChartI();
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );


    return (
         <div className="circleChart">
            <h1>Top Locations</h1>
            { data &&  data.top_locations.map((item) => {
              return (
                <div className="text">
                <p> 
                 {item.country}
                   <span>{item.count}</span>
                 </p>
            </div>
            )}) }
            <div className="chart">
                <h2>View full report</h2>
            <Pie
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