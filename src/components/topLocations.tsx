import { useAxios } from './useAxios';
import { IJsonResponse } from "./topSources";
import { PieChartI } from './pieChart';



export const TopLocations: React.FunctionComponent = () => {
  const [loading, data, error, request] = useAxios<IJsonResponse>(
    {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
  );


    return (
         <div className="circleChart left">
            <div className="text">
            <h3>Top Locations</h3>
            { data &&  data.top_locations.map((item) => {
              return (
                <p> 
                 {item.country}
                   <span>{item.percent}%</span>
                 </p>
            )}) }
            </div>
            <div className="chart">
                <h3>View full report</h3>
           <PieChartI />
            </div>

         </div>
    )
}