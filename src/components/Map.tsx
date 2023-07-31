import React from 'react'
import * as ReactDOMServer from 'react-dom/server';
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import { Feature, Geometry } from "geojson";
import { Layer } from "leaflet";
import CountryTable from "./CountryTable";
import countries from '../data/countries';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const onEachCountry = (feature: Feature<Geometry, any>, layer: Layer) => {
    const code = feature.properties.ISO_A2;
    layer.on('click', async (e) => {
      try {
        const data = await import(`../data/${code}`);
        const element = ReactDOMServer.renderToString(<CountryTable data={data.default} />);
        layer.bindPopup(element).openPopup(e.latlng);
      } catch {}
    });
  };

  return (
    <MapContainer
      center={[46.320966437203424, 2.3830497200425023]}
      zoom={6}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        // @ts-expect-error
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default Map;
