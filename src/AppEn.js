import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import wedVideo from './vid/video.mp4';
import FooterImg from './img/footer.png';
import './App.css';
import 'leaflet/dist/leaflet.css';

// رفع مشکل آیکون‌های پیش‌فرض در Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AppEn = () => {
  const latitude = 35.72186586;
  const longitude = 51.83659673;

  return (
    <div className="App en">
      <div className="background">
        <section className="content">
          <div className="video-section">
            <video src={wedVideo} controls autoPlay loop playsInline />
          </div>
          <div className="address-section">
            <h2>Venue Location:</h2>
            <p>Address: Tehran, Vali Asr Street, Grand Hall</p>
          </div>
          <div className="map-section">
            <a
              href={`https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MapContainer
                center={[latitude, longitude]}
                zoom={15}
                className="leaflet-container"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[latitude, longitude]}>
                  <Popup>
                    Grand Hall <br /> Tehran
                  </Popup>
                </Marker>
              </MapContainer>
              <p>View route on map</p>
            </a>
          </div>
          <img src={FooterImg} style={{ margin: 'auto', display: 'flex' }} alt="Footer" />
        </section>
      </div>
    </div>
  );
};

export default AppEn;
