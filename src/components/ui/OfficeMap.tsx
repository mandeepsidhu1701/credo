// src/components/OfficeMap.tsx

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MapPin } from "lucide-react";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const locations = [
  {
    name: "Auckland, New Zealand",
    position: [-36.8485, 174.7633] as [number, number],
    description: "New Zealand office — by appointment only",
  },
  {
    name: "Melbourne, Australia",
    position: [-37.8136, 144.9631] as [number, number],
    description: "Australia consultations — by appointment only",
  },
];

export default function OfficeMap() {
  return (
    <div className="card-elevated overflow-hidden">
      <div className="aspect-video relative">
        <MapContainer
          center={[-37.3, 159.5]}
          zoom={4}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location) => (
            <Marker key={location.name} position={location.position}>
              <Popup>
                <div>
                  <strong>{location.name}</strong>
                  <br />
                  {location.description}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="p-5 bg-background">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-accent mt-1" />
          <div>
            <h3 className="font-semibold text-foreground">
              New Zealand & Australia Locations
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Consultations are available by appointment only. Please send your
              enquiry first and we will arrange a suitable online or face-to-face
              consultation time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}