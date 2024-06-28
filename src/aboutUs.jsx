import React from 'react';
import { Container, Row, Col, Card, Image, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake, faBullseye, faStar, faConciergeBell
} from '@fortawesome/free-solid-svg-icons';
import ojoImage from './services/img/ojo.jpg';
import imagesImage from './services/img/images.png';
import descargaImage from './services/img/descarga.png';
import descarga1Image from './services/img/descarga (1).png';

const cardData = [
  {
    image: imagesImage,
    icon: faHandshake,
    title: 'Misión',
    text: 'En Servicios Libres, nuestra misión es conectar a las personas con los mejores proveedores de servicios, de manera rápida y confiable. Nos esforzamos por ofrecer una plataforma segura y eficiente donde nuestros usuarios puedan encontrar soluciones a todas sus necesidades.',
  },
  {
    image: ojoImage,
    icon: faBullseye,
    title: 'Visión',
    text: 'Nuestra visión es ser la plataforma líder a nivel mundial en la conexión de personas con servicios, facilitando la vida de nuestros usuarios al brindar acceso a servicios de alta calidad de manera accesible y conveniente.',
  },
  {
    image: descargaImage,
    icon: faStar,
    title: 'Valores',
    text: (
      <>
        Nos guiamos por los siguientes valores:
        <ul>
          <li>Confianza</li>
          <li>Calidad</li>
          <li>Compromiso</li>
          <li>Innovación</li>
          <li>Responsabilidad</li>
        </ul>
      </>
    ),
  },
  {
    image: descarga1Image,
    icon: faConciergeBell,
    title: 'Servicios que Ofrecemos',
    text: (
      <>
        Ofrecemos una amplia gama de servicios que incluyen:
        <ul>
          <li>Servicios de limpieza</li>
          <li>Reparaciones del hogar</li>
          <li>Clases particulares</li>
          <li>Consultoría profesional</li>
          <li>Y mucho más...</li>
        </ul>
      </>
    ),
  },
];

const carouselItems = [
  'Gracias por confiar en Servicios Libres. Nos esforzamos cada día por mejorar y brindarles el mejor servicio posible. Su satisfacción es nuestra prioridad, y estamos aquí para ayudarles en todo lo que necesiten. ¡Su confianza es nuestro mayor logro!',
  'Nuestro objetivo es seguir creciendo y mejorando para ofrecerles siempre el mejor servicio. Cada día es una nueva oportunidad para innovar y superar sus expectativas.',
  'Estamos aquí para servirles con el mayor compromiso y responsabilidad, siempre atentos a sus necesidades y buscando la manera de hacer su vida más fácil.',
];

const Conocenos = () => {
  return (
    <Container className="about-us" fluid>
      <Row>
        <Col>
          <Carousel className="info-card" indicators={false}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <Card className="info-card">
                  <Card.Body>
                    <Card.Title>Mensaje para Nuestros Usuarios</Card.Title>
                    <Card.Text>{item}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row className="d-flex justify-content-center">
            {cardData.map((card, index) => (
              <Col md={5} className="mb-4" key={index}>
                <Card className="info-card small-card">
                  <Image src={card.image} fluid className="card-image" />
                  <Card.Body>
                    <FontAwesomeIcon icon={card.icon} className="icon" />
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <Card className="info-card contact-card">
            <Card.Body>
              <Card.Title>Contáctanos para mayor informacion</Card.Title>
              <Card.Text>
                <p>Email: contacto@serviciexpress.com</p>
                <p>Teléfono: +123 456 7890</p>
                <p>Dirección: Calle nueva  123, Ciudad, País</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Conocenos;
