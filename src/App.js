import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import wedVideo from './vid/video.mp4';
import FooterImg from './img/footer.png';
import './App.css';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const App = () => {
  const latitude = 35.72186586;
  const longitude = 51.83659673;

  return (
    <div className="App">
      <div className="background">
        <section className="content">
          <div className="video-section">
            <video src={wedVideo} controls autoPlay loop playsInline />
          </div>
          <div className="address-section">
            <h2>مکان برگزاری مراسم</h2>
            <p style={{ color: '#A88969'}}>آدرس باغ نیکان</p>
            <p>شرق تهران - پردیس</p>
            <p>بعد از پارک علم و فناوری پردیس - منطقه کرشت - انتهای بلوار اصلی - ۱۲ متری گلستان - نبش کوچه قناری - پلاک ۳۲</p>
          </div>
          <div className="map-section">
            <a
              href={`https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MapContainer center={[latitude, longitude]} zoom={15} style={{ height: '450px', width: '90%', maxWidth: '500px', display: 'flex', margin: 'auto' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[latitude, longitude]}>
                  <Popup>
                    باغ نیکان <br /> تهران
                  </Popup>
                </Marker>
              </MapContainer>
              <p style={{ textAlign: 'center', marginTop: '10px', color: '#A88969' }}>مشاهده مسیر روی نقشه</p>
            </a>
          </div>
          <img src={FooterImg} style={{ margin: 'auto', display: 'flex' }} alt="Footer" />
        </section>
      </div>
    </div>
  );
};

export default App;
