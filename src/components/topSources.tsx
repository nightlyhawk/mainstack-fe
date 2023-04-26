import { PieChartII } from './pieChartII';
import { useAxios } from './useAxios';


export interface IJsonResponse {
   graph_data: graph_data;
   top_locations: top_locations[];
   top_sources: top_sources[];
 };

 interface graph_data {
    views: {};
 }

 interface top_locations {
    country: string;
    count: number;
    percent: number;
 }

 interface top_sources {
    source: string;
    count: number;
    percent: number;
 }



export const TopSources: React.FunctionComponent = () => {
    const [loading, data, error, request] = useAxios<IJsonResponse>(
      {method: 'GET', url: "https://fe-task-api.mainstack.io/"}
    );

    return (
         <div className="circleChart right">
            {loading && <div>Loading....</div> }
            {error && <div>{error}</div> }
            <div className="text">
            <h3>Top Sources</h3>
            { data &&  data.top_sources.map((item) => {
               return (
                
                <p> 
                 {item.source}
                   <span>{item.percent}%</span>
                 </p>
             )
            }) }
            </div>
            <div className="chart">
            <h3>View full report</h3>
            <PieChartII />
            </div>

         </div>
    )
}