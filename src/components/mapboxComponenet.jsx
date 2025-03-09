import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
const LeafletGlobeMap = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const history = useHistory();

  // Marker data for places
  const markers = [
    { id: 1, name: 'United States', coordinates: [-97, 38] },
    { id: 2, name: 'Guatemala', coordinates: [-75, -11] },
    { id: 3, name: 'Peru', coordinates: [-9, -11] },
    { id: 4, name: 'Paraguay', coordinates: [37, -96] },
    { id: 5, name: 'Algeria', coordinates: [28,2] },
    { id: 6, name: 'Central African Republic', coordinates: [7,21] },
    { id: 7, name: 'Madagascar', coordinates: [-20, 46] },
    { id: 8, name: 'Ethiopia', coordinates: [8,39] },
    { id: 9, name: 'Pakistan', coordinates: [30,69] },
    { id: 10, name: 'Uzbekistan', coordinates: [41,63] },
    { id: 11, name: 'Indonesia', coordinates: [-2, 120] },
    { id: 12, name: 'France', coordinates: [-9, -75] },
  ];

  // Initialize the map
  useEffect(() => {
    // Only initialize if the container is available
    if (!mapContainerRef.current) return;

    console.log("Initializing or updating map");

    // Fix the Leaflet icon issue
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    try {
      // Clean up existing map instance if it exists
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
      
      // Initialize the map
      mapInstanceRef.current = L.map(mapContainerRef.current, {
        minZoom: 1.5,
        worldCopyJump: true
      }).setView([20, 0], 2);
      
      // Try a different tile provider - OpenStreetMap standard tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abc',
        maxZoom: 19,
      }).addTo(mapInstanceRef.current);
      
      
      // Add markers with different colored icons for better visibility
      markers.forEach((marker, index) => {
        // Create a colored icon
        const markerColors = ['blue', 'red', 'green'];
        const colorIndex = index % markerColors.length;
        
        const markerIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: ${markerColors[colorIndex]}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        
        const markerInstance = L.marker([marker.coordinates[1], marker.coordinates[0]], { icon: markerIcon })
          .addTo(mapInstanceRef.current);
          
        // Add popup
        markerInstance.bindPopup(`
          <div>
            <h3>${marker.name}</h3>
            <p>Click below to view more details.</p>
            <button id="marker-${marker.id}-btn" style="background: #4a90e2; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">View Details</button>
          </div>
        `);
        
        // Handle click on popup button
        markerInstance.on('popupopen', () => {
          setTimeout(() => {
            const btn = document.getElementById(`marker-${marker.id}-btn`);
            if (btn) {
              btn.addEventListener('click', () => {
                history.push(`/details/${marker.id}`);
              });
            }
          }, 100);
        });
      });

      // Add a custom attribution control
      L.control.attribution({
        position: 'bottomright',
        prefix: 'Interactive Globe Map'
      }).addTo(mapInstanceRef.current);

      // Make sure the map renders correctly - try a longer timeout
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
          setMapReady(true);
          console.log("Map is ready");
        }
      }, 500);
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    // Recenter and resize the map whenever the component rerenders
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        console.log("Map resized");
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Ensure map resizes when it becomes visible (e.g., tab changes, etc.)
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstanceRef.current) {
        setTimeout(() => {
          mapInstanceRef.current.invalidateSize();
        }, 200);
      }
    });
    
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapContainerRef.current) {
        resizeObserver.unobserve(mapContainerRef.current);
      }
      if (mapInstanceRef.current) {
        console.log("Cleaning up map");
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [history]); // Only re-run if history changes

  return (
      <div 
        ref={mapContainerRef} 
        style={{ 
          height: '600px', 
          width: '800px',
          position: 'relative',
          marginLeft: '100px',
          marginRight: '100px',
          marginTop: '100px',
          marginBottom: '100px',
          maxWidth: '1200px',
          overflow: 'hidden',
          zIndex: 1,
          borderRadius: '14px'
        }} 
      >
      {!mapReady && (
        <div style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255,255,255,0.8)',
          color: '#ffff',
          padding: '15px 30px',
          margin: '200px',
          borderRadius: '14px',
          zIndex: 1000,
        }}>
          Loading map...
        </div>
      )}
      </div>
  );
};

export default LeafletGlobeMap;