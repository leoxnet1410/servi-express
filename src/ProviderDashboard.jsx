import React from 'react';
import { Card, Button, ProgressBar, Container, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

const ServiceProviderDashboard = ({
  name = "Nombre del Servicio",
  rating = 80, // Calificación predeterminada
  score = 1500, // Puntuación predeterminada
  balance = 100.0, // Saldo predeterminado
  consultations = 1,
  transactions = [
    {
      trackingNumber: "13256498",
      clientName: "Juan Pérez",
      totalOrder: 125,
      status: "Rechazado",
      totalAmount: 70999
    },
    {
      trackingNumber: "13286564",
      clientName: "María López",
      totalOrder: 100,
      status: "Aprobado",
      totalAmount: 83348
    },
    {
      trackingNumber: "84564564",
      clientName: "Carlos Gómez",
      totalOrder: 40,
      status: "Rechazado",
      totalAmount: 40570
    },
    {
      trackingNumber: "86739658",
      clientName: "Ana Fernández",
      totalOrder: 99,
      status: "Pendiente",
      totalAmount: 410780
    },
    {
      trackingNumber: "98652366",
      clientName: "Luis Martínez",
      totalOrder: 50,
      status: "Aprobado",
      totalAmount: 10239
    },
    {
      trackingNumber: "98753263",
      clientName: "Sofía Rodríguez",
      totalOrder: 89,
      status: "Rechazado",
      totalAmount: 10570
    },
    {
      trackingNumber: "98753275",
      clientName: "Miguel Torres",
      totalOrder: 185,
      status: "Aprobado",
      totalAmount: 98063
    },
    {
      trackingNumber: "98753291",
      clientName: "Lucía Ramírez",
      totalOrder: 100,
      status: "Pendiente",
      totalAmount: 14001
    },
    {
      trackingNumber: "98756325",
      clientName: "Pedro Jiménez",
      totalOrder: 355,
      status: "Aprobado",
      totalAmount: 90989
    },
    {
      trackingNumber: "98764564",
      clientName: "Claudia Morales",
      totalOrder: 300,
      status: "Pendiente",
      totalAmount: 180139
    }
  ]
}) => {
  return (
    <Container className="service-provider-dashboard">
      <Row className="mb-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Consultas Realizadas</Card.Title>
              <h3>{consultations}</h3>
            </Card.Body>
          </Card>
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
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Historial de Transacciones</Card.Title>
              {transactions.length > 0 ? (
                <Table className="table-borderless" hover responsive>
                  <thead>
                    <tr>
                      <th>NÚMERO DE SEGUIMIENTO</th>
                      <th>NOMBRE DEL CLIENTE</th>
                      <th>ORDEN TOTAL</th>
                      <th>ESTADO</th>
                      <th>CANTIDAD TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td>{transaction.trackingNumber}</td>
                        <td>{transaction.clientName}</td>
                        <td>{transaction.totalOrder}</td>
                        <td>
                          {transaction.status === "Aprobado" && (
                            <>
                              <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> {transaction.status}
                            </>
                          )}
                          {transaction.status === "Rechazado" && (
                            <>
                              <FontAwesomeIcon icon={faTimesCircle} className="text-danger" /> {transaction.status}
                            </>
                          )}
                          {transaction.status === "Pendiente" && (
                            <>
                              <FontAwesomeIcon icon={faCircle} className="text-warning" /> {transaction.status}
                            </>
                          )}
                        </td>
                        <td>${transaction.totalAmount.toLocaleString()}</td>
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