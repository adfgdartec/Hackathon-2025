import LeafletGlobeMap from "../components/mapboxComponenet"; // Update the path if needed
import '../css/map.css'
function MapPage() {
    console.log("HomePage component is rendering");
    return (
        <>
        <div>
            <h1 style={{textAlign:'center', fontSize: '50px'}}>Global View</h1>
        </div>
        <div>
            <LeafletGlobeMap />
        </div>
        </>
    );
}

export default MapPage;