import LeafletGlobeMap from "../components/mapboxComponenet"; // Update the path if needed

function MapPage() {
    console.log("HomePage component is rendering");
    return (
        <>
        <div>
            <h1 style={{textAlign:'center'}}>Map Of Cities in Danger</h1>
        </div>
        <div>
            <LeafletGlobeMap />
        </div>
        </>
    );
}

export default MapPage;