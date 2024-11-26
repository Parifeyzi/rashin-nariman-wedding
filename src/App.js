import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import wedVideo from './vid/video.mp4';
import FooterImg from './img/footer.png';
import GoogleMap from './icons/google-maps.png';
import Waze from './icons/waze.png';
import Balad from './icons/balad.svg';
import Neshan from './icons/neshan.png';
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

  const neshanPlaceId = '5afc48644f94982b2036d1166958b109';
  const baladPlaceId = '6IwGfi1gtDSSVG';

  const navigationLinks = {
    waze: `waze://?ll=${latitude},${longitude}&navigate=yes`,
    googleMaps: `comgooglemaps://?daddr=${latitude},${longitude}&directionsmode=driving`,
    neshan: `https://neshan.org/maps/places/${neshanPlaceId}#c${latitude}-${longitude}-15z-0p`,
    balad: `https://balad.ir/p/${baladPlaceId}?preview=true#15/${latitude}/${longitude}`,
  };

  const fallbackLinks = {
    waze: `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`,
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    neshan: `https://neshan.org/maps/places/${neshanPlaceId}#c${latitude}-${longitude}-15z-0p`,
    balad: `https://balad.ir/p/${baladPlaceId}?preview=true#15/${latitude}/${longitude}`,
  };

  const handleNavigation = (app) => {
    const scheme = navigationLinks[app];
    const fallback = fallbackLinks[app];
    window.location.href = scheme;
    setTimeout(() => {
      window.open(fallback, '_blank');
    }, 500);
  };

  const iconStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    alignContent: 'center',
    gap: '10px',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#A88969',
    maxWidth: '50px',
    cursor: 'pointer'
  };

  const imgStyle = {
    width: '50px',
    height: '50px',
    marginBottom: '5px',
    objectFit: 'contain',
  };

  return (
    <div className="App">
      <div className="background">
        <section className="content">
          <div className="video-section">
            <video src={wedVideo} controls autoPlay loop playsInline />
          </div>
          <div className="address-section">
            <h2>مکان برگزاری مراسم</h2>
            <p style={{ color: '#A88969' }}>آدرس باغ نیکان</p>
            <p>شرق تهران - پردیس</p>
            <p>بعد از پارک علم و فناوری پردیس - منطقه کرشت - انتهای بلوار اصلی - ۱۲ متری گلستان - نبش کوچه قناری - پلاک ۳۲</p>
          </div>
          <div className="map-section">
            <MapContainer
              center={[latitude, longitude]}
              zoom={15}
              style={{
                height: '450px',
                width: '90%',
                maxWidth: '500px',
                display: 'flex',
                margin: 'auto',
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[latitude, longitude]}>
                <Popup>
                  باغ نیکان <br /> تهران
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      gap: '10px',
                      marginTop: '10px',
                    }}
                  >
                    <div onClick={() => handleNavigation('googleMaps')} style={iconStyle}>
                      <img src={GoogleMap} alt="Google Maps" style={imgStyle} />
                      <span>Google Maps</span>
                    </div>
                    <div onClick={() => handleNavigation('waze')} style={iconStyle}>
                      <img src={Waze} alt="Waze" style={imgStyle} />
                      <span>Waze</span>
                    </div>
                    <a href={navigationLinks.neshan} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                      <img src={Neshan} alt="نشان" style={imgStyle} />
                      <span>نشان</span>
                    </a>
                    <a href={navigationLinks.balad} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                      <img src={Balad} alt="بلد" style={imgStyle} />
                      <span>بلد</span>
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: '20px',
                marginTop: '15px',
                padding: '0 10px'
              }}
            >
              <div onClick={() => handleNavigation('googleMaps')} style={iconStyle}>
                <img src={GoogleMap} alt="Google Maps" style={imgStyle} />
                <span>Google Maps</span>
              </div>
              <div onClick={() => handleNavigation('waze')} style={iconStyle}>
                <img src={Waze} alt="Waze" style={imgStyle} />
                <span>Waze</span>
              </div>
              <a href={navigationLinks.neshan} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                <img src={Neshan} alt="نشان" style={imgStyle} />
                <span>نشان</span>
              </a>
              <a href={navigationLinks.balad} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                <img src={Balad} alt="بلد" style={imgStyle} />
                <span>بلد</span>
              </a>
            </div>
          </div>
          <img src={FooterImg} style={{ margin: 'auto', display: 'flex' }} alt="Footer" />
        </section>
      </div>
    </div>
  );
};

export default App;
