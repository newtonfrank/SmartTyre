'use client';

import L, { icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';


//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

interface MapProps {
    center?: number[];
}



const Map: React.FC<MapProps> = ({
    center,
}) => {
    return (
        <MapContainer
            center={center as L.LatLngExpression || [ 13.3400771, 77.1006208]} 
            zoom={center ? 4 : 2}
            scrollWheelZoom={false}
            className="h-[40vh] rounded-lg"
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {center && (
                <Marker
                    position={center as L.LatLngExpression}
                    icon={icon({
                        iconUrl: '/images/pin.png',
                        iconSize: [38, 38],
                    })}
                />
            )}

        </MapContainer>
    )
}

export default Map;