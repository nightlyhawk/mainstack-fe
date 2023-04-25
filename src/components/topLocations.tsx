import { useFetch } from "./useFetch";
import { Pie } from "react-chartjs-2";
import { data } from "./topSources";
import { PieChartI } from "./pieChart";



export const TopLocations = () => {
    const { chartData } = PieChartI();
    const { data, loading, error } = useFetch(
        "https://fe-task-api.mainstack.io/", 
    );

    return (
         <div className="circleChart">
            <h1>Top Locations</h1>
            { error && <div>{error}</div> }
            { loading && <div>Loading.....</div> }
            { data &&  data.map((item: data) => (
                <div className="text">
                <p> 
                 {item.top_locations.country}
                   <span>{item.top_locations.count}</span>
                 </p>
            </div>
            )) }
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