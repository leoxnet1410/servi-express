
import React from 'react';
import { Card, Button, ProgressBar, Container, Row, Col, Image, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ServiceProviderDashboard = ({
  name = "Nombre del Servicio",
  profilePicture = "https://via.placeholder.com/150",
  rating = 80, // Calificación predeterminada
  score = 1500, // Puntuación predeterminada
  balance = 100.0, // Saldo predeterminado
  consultations = 1,
  transactions = [
    {
      date: "2024-07-11",
      description: <FontAwesomeIcon icon={faCheckCircle} />,
      amount: -20.0
    },
    {
      date: "2024-07-12",
      description: <FontAwesomeIcon icon={faCheckCircle} />,
      amount: 50.0
    },
    {
      date: "2024-07-13",
      description: <FontAwesomeIcon icon={faTimesCircle} />,
      amount: -10.0
    }
  ]
}) => {
  return (
    <Container className="service-provider-dashboard">
      <Row className="mb-4">
        <Col md={4} className="text-center">
          <Image src={profilePicture} roundedCircle className="profile-picture mb-3" />
          <h3>{name}</h3>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Puntaje</Card.Title>
                  <h3>{score}</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Calificación</Card.Title>
                  <ProgressBar now={rating} label={`${rating}%`} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Saldo Disponible</Card.Title>
                  <h3>${balance.toFixed(2)}</h3>
                  <Button variant="primary" className="mt-3">Recargar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Consultas Realizadas</Card.Title>
              <h3>{consultations}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Historial de Transacciones</Card.Title>
              {transactions.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Descripción</th>
                      <th>Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>${transaction.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No hay transacciones disponibles</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceProviderDashboard;