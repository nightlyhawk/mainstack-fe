import { Nav } from "../components/nav";
import { DashBoard } from "../components/dashBoard";
import { TopLocations } from "../components/topLocations";
import { TopSources } from "../components/topSources";
import { Chart } from "../components/chart";
import { Header } from "../components/header";



export const Main = () => {
    return (
       <div className="grid-container">
        <DashBoard />
        <Nav />
        <Header />
        <Chart />
        <TopLocations />
        <TopSources />
       </div>
    )
}