
import { Fragment } from 'react';
import { Map, Marker } from '';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/tuempresa"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-blue-500" />
            </a>
            <a
              href="https://www.instagram.com/tuempresa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500" />
            </a>
          </div>
          <div className="text-lg font-bold">Tu Empresa</div>
        </div>
        <div className="w-full h-64 mb-4">
          <Map
            center={[37.7749, -122.4194]}
            zoom={13}
            style={{ width: '100%', height: '100%' }}
            apiKey="YOUR_API_KEY_HERE"
          >
            <Marker position={[37.7749, -122.4194]}>
              <div className="text-lg font-bold">Tu Empresa</div>
            </Marker>
          </Map>
        </div>
        <div className="text-sm text-gray-600">
          &copy; 2023 Tu Empresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;