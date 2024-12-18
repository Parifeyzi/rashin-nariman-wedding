import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import wedVideo from './vid/video.mp4';
import FooterImg from './img/footer.png';
import GoogleMap from './icons/google-maps.png';
import Waze from './icons/waze.png';
import Balad from './icons/balad.svg';
import Neshan from './icons/neshan.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AppEn = () => {
  const latitude = 35.72186586;
  const longitude = 51.83659673;

  const neshanPlaceId = '5afc48644f94982b2036d1166958b109';
  const baladPlaceId = '6IwGfi1gtDSSVG';

  const navigationLinks = {
    waze: `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`,
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    neshan: `https://neshan.org/maps/places/${neshanPlaceId}#c${latitude}-${longitude}-15z-0p`,
    balad: `https://balad.ir/p/${baladPlaceId}?preview=true#15/${latitude}/${longitude}`,
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
  };

  const imgStyle = {
    width: '50px',
    height: '50px',
    marginBottom: '5px',
    objectFit: 'contain',
  };

  return (
    <div className="App en">
      <div className="background">
        <section className="content">
          <div className="video-section">
            <video src={wedVideo} controls autoPlay loop playsInline />
          </div>
          <div className="address-section">
            <h2>Venue Location</h2>
            <p style={{ color: '#A88969' }}>Grand Hall Address</p>
            <p>East Tehran - Pardis</p>
            <p>
              After Pardis Science and Technology Park - Kheresh Area - End of Main
              Boulevard - Golestan Street - Canary Alley - No. 32
            </p>
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
                  Grand Hall <br /> Tehran
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
                padding: '0 10px',
              }}
            >
              <a
                href={navigationLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <img
                  src={GoogleMap}
                  alt="Google Maps"
                  style={imgStyle}
                />
                <span>Google Maps</span>
              </a>
              <a
                href={navigationLinks.waze}
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <img
                  src={Waze}
                  alt="Waze"
                  style={imgStyle}
                />
                <span>Waze</span>
              </a>
              <a
                href={navigationLinks.neshan}
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <img
                  src={Neshan}
                  alt="Neshan"
                  style={imgStyle}
                />
                <span>Neshan</span>
              </a>
              <a
                href={navigationLinks.balad}
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <img
                  src={Balad}
                  alt="Balad"
                  style={imgStyle}
                />
                <span>Balad</span>
              </a>
            </div>
          </div>
          <img
            src={FooterImg}
            style={{ margin: 'auto', display: 'flex' }}
            alt="Footer"
          />
        </section>
      </div>
    </div>
  );
};

export default AppEn;
