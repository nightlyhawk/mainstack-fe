import { Nav } from "../components/nav";
import { DashBoard } from "../components/dashBoard";
import { TopLocations } from "../components/topLocations";
import { TopSources } from "../components/topSources";
import { Header } from "../components/header";
import { Graph } from "../components/graph";



export const Main = () => {
    return (
       <div className="grid-container">
        <DashBoard />
        <Nav />
        <Header />
        <Graph />
        <TopLocations />
        <TopSources />
       </div>
    )
}