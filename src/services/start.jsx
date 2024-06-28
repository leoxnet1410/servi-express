import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inicio = () => (
  <Container className="d-flex flex-column min-vh-100 justify-content-center">
    <Row className="justify-content-md-center text-center">
      <Col md="auto">
        <h1 className="my-3">Encuentra el servicio que necesitas  en Bolivia</h1>
        <p>Con Serviexpress podrás ofrecer y conseguir servicios  de manera fácil, rápida y segura.</p>
        <Form>
          <Form.Group controlId="jobTitle">
            <Form.Control type="text" placeholder="Título del Servicio..." />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Select>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="La Paz">La Paz</option>
              <option value="Oruro">Oruro</option>
              <option value="Cochabamba">Cochabamba</option>
              <option value="Tarija">Tarija</option>
              <option value="Pando">Pando</option>
            </Form.Select>
          </Form.Group>
          <Link to="/company">
            <Button variant="primary" type="submit" className="mt-3">Encontrar servicios</Button>
          </Link>
        </Form>
        <p></p>
      </Col>
    </Row>
  </Container>
);

export default Inicio;