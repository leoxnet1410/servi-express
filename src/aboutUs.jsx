import React from 'react';
import { Container, Row, Col, Card, Carousel,Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake, faBullseye, faStar, faConciergeBell
} from '@fortawesome/free-solid-svg-icons';
import ojoImage from './services/img/ojo.jpg';
import imagesImage from './services/img/images.png';
import descargaImage from './services/img/descarga.png';
import descarga1Image from './services/img/descarga (1).png';
import sibdeImage from './services/img/sibde.png';
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
  {
    text: 'Gracias por confiar en Servicios Libres. Nos esforzamos cada día por mejorar y brindarles el mejor servicio posible. Su satisfacción es nuestra prioridad, y estamos aquí para ayudarles en todo lo que necesiten.',
  },
  {
    text: 'Nuestro objetivo es seguir creciendo y mejorando para ofrecerles siempre el mejor servicio. Cada día es una nueva oportunidad para innovar y superar sus expectativas.',
  },
  {
    text: 'Estamos aquí para servirles con el mayor compromiso y responsabilidad, siempre atentos a sus necesidades y buscando la manera de hacer su vida más fácil.',
  },
  {
    text: 'En Servicios Libres, creemos en la importancia de conectar a las personas con los servicios que necesitan, de manera rápida y confiable. ¡Tu comodidad es nuestra misión!',
  },
  {
    text: 'Trabajamos incansablemente para ser la plataforma líder en la conexión de personas con servicios de alta calidad. ¡Tu satisfacción es nuestro éxito!',
  },
  {
    text: 'La confianza y la calidad son los pilares de nuestro servicio. Nos dedicamos a ofrecer una plataforma segura y eficiente para que encuentres las mejores soluciones.',
  },
  {
    text: 'Cada día nos dedicamos a innovar y mejorar para ofrecerte un servicio que supere tus expectativas. Gracias por ser parte de Servicios Libres.',
  },
  {
    text: 'En Servicios Libres, tu confianza es nuestro mayor logro. Nos comprometemos a brindarte el mejor servicio, siempre atentos a tus necesidades.',
  },
  {
    text: 'Ofrecemos una amplia gama de servicios para facilitar tu vida. Desde reparaciones del hogar hasta consultoría profesional, estamos aquí para ayudarte en todo lo que necesites.',
  },
  {
    text: 'La satisfacción de nuestros usuarios es nuestra prioridad. Nos esforzamos por ofrecer un servicio rápido, confiable y de alta calidad. ¡Gracias por elegirnos!',
  },
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
                    <Card.Text>{item.text}</Card.Text>
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
          <Card className="sibde">
          <Image src={sibdeImage} fluid className="w-100 h-100 contact-image" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Conocenos;

