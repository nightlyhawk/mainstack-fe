import { Nav } from "../components/nav";
import { DashBoard } from "../components/dashBoard";
import { TopLocations } from "../components/topLocations";
import { TopSources } from "../components/topSources";
import { Chart } from "../components/chart";



export const Main = () => {
    return (
       <div className="grid-container">
        <DashBoard />
        <Nav />
        <h1>
            Good morning, Blessing
        </h1>
        <p>Checkout your dashboard summary</p>
        <Chart />
        <TopLocations />
        <TopSources />
       </div>
    )
}