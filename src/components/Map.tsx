import * as ReactDOMServer from 'react-dom/server'
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet'
import { Layer } from 'leaflet'
import CountryTable from './CountryTable'
import countries from '../data/countries'
import styles from './Map.module.css'
import 'leaflet/dist/leaflet.css'

const onEachCountry = (feature: any, layer: Layer) => {
  const code = feature.properties.ISO_A2;
  layer.on('click', async (e) => {
    try {
      const data = await import(`../data/${code}`);
      const element = ReactDOMServer.renderToString(<CountryTable data={data.default} />);
      layer.bindPopup(element).openPopup(e.latlng);
    } catch {}
  });
};

const Map = () => (
  <MapContainer
    center={[46.320966437203424, 2.3830497200425023]}
    className={styles.skeleton}
    zoom={6}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GeoJSON
      // @ts-expect-error
      data={countries}
      onEachFeature={onEachCountry}
    />
  </MapContainer>
);

export default Map;
