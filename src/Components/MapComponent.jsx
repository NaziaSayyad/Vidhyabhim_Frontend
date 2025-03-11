import { Card, Title } from "@mantine/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [35, 35],
});

const locations = [
  { id: 1, name: "Main Campus", coords: [28.6139, 77.2090] }, // Delhi
  { id: 2, name: "Branch 1", coords: [19.0760, 72.8777] }, // Mumbai
  { id: 3, name: "Branch 2", coords: [13.0827, 80.2707] }, // Chennai
];

function MapComponent() {
  return (
    <Card shadow="sm" p="lg">
      <Title order={3} align="center">
        Institute Locations
      </Title>
      <MapContainer center={[22.5726, 77.1025]} zoom={5} style={{ height: "400px", borderRadius: "10px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location) => (
          <Marker key={location.id} position={location.coords} icon={customIcon}>
            <Popup>
              <b>{location.name}</b> <br />
              📍 {location.coords[0]}, {location.coords[1]}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Card>
  );
}

export default MapComponent;
