import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap"; // Importa el componente Button de React Bootstrap
import maderaImage from '../services/img/madera.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Venta = () => {
  const imagenesCarrusel = [maderaImage, maderaImage, maderaImage];

  return (
    <div className="venta-container">
      <div className="venta-center"> {/* Contenedor para centrar el contenido */}
        <div className="header">
          <Link to="/company">
            <Button variant="light"> {/* Utiliza el componente Button de React Bootstrap */}
              &larr; {/* Icono de flecha izquierda */}
            </Button>
          </Link>
        </div>
        <div className="venta-content">
          <div className="venta-image">
            <Carousel>
              {imagenesCarrusel.map((imagen, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imagen}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="venta-details">
            <h2>Casa Color</h2>
            <p>Una hermosa casa de madera colorida, ideal para vacacionar.</p>
        
         
            <p className="price">$500,000</p>
            <Button variant="success" className="consult-button">Consultar</Button> {/* Utiliza el componente Button de React Bootstrap */}
            <div className="venta-seller">
              <p>Vendedor VIP</p>
            </div>
            <div className="venta-description">
              <p>Esta casa está hecha con los mejores materiales de madera, ofreciendo una estructura resistente y un diseño acogedor. Perfecta para disfrutar de momentos inolvidables.</p>
            </div>
            <div className="venta-social">
              <Button variant="" className="whatsapp-button">
                <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp-icon" />
              </Button>
              <Button variant="" className="facebook-button">
                <FontAwesomeIcon icon={faFacebook} className="social-icon facebook-icon" />
              </Button>
              <Button variant="" className="instagram-button">
                <FontAwesomeIcon icon={faInstagram} className="social-icon instagram-icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venta;