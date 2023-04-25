import { useFetch } from "./useFetch";
import { PieChartII } from "./pieChartII";
import { Pie } from "react-chartjs-2";


export interface data {
   graph_data: graph_data,
   top_locations: top_locations,
   top_sources: top_sources,
 };

 interface graph_data {
    views: views
 }

 interface views {
    keys: values
 }
 interface values {
    values: number
 }

 interface top_locations {
    country: string
    count: number
    percent: number
 }

 interface top_sources {
    source: string
    count: number
    percent: number
 }



export const TopSources = () => {

    const { chartData } = PieChartII();
    const { data, loading, error } = useFetch(
        "https://fe-task-api.mainstack.io/", 
    );

    return (
         <div className="circleChart">
            <h1>Top Offers</h1>
            { error && <div>{error}</div> }
            { loading && <div>Loading.....</div> }
            { data &&  data.map((item: any) => {
               return (
                <div className="text">
                <p> 
                 {item.top_sources.source}
                   <span>{item.top_sources.count}</span>
                 </p>
            </div>
            )
            }) }
            <div className="chart">
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