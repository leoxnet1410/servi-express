import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import eleImage from '../services/img/ele.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Ejemplo de datos de empresas
const exampleCompanies = [
  { id: 1, name: 'Empresa 1' },
  { id: 2, name: 'Empresa 2' },
  { id: 3, name: 'Empresa 3' },
  { id: 4, name: 'Empresa 4' },
  { id: 5, name: 'Empresa 5' },
  { id: 6, name: 'Empresa 6' },
  { id: 7, name: 'Empresa 7' },
  { id: 8, name: 'Empresa 8' },
  { id: 9, name: 'Empresa 9' }
];

// Componente para una empresa
const Company = ({ product }) => {
  return (
    <Card style={{ maxWidth: '280px', margin: '1rem' }}>
      <Image src={eleImage} alt={product.name} fluid style={{ maxHeight: '180px' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Link to="/seller">
        <Button className="custom-button" size="sm">Consultar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Lista de productos
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/company`);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
        // Usar datos de ejemplo en caso de error
        setProducts(exampleCompanies);
      }
    };

    fetchProducts();
  }, []);

  const rows = [];
  for (let i = 0; i < products.length; i += 3) {
    rows.push(products.slice(i, i + 3));
  }

  return (
    <div className="product-list">
      {rows.map((row, index) => (
        <Row key={index} className="justify-content-center">
          {row.map((product, rowIndex) => (
            <Col key={rowIndex} md={4} className="mb-3">
              <Company product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default ProductList;
