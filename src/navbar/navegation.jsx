import React from 'react';
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCog, faSignOutAlt, faTachometerAlt, faBell,faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import perfilImage from "../services/img/perfil.png";

const Nave = () => {
  const handleLogout = () => {
    console.log("Cerrando sesión...");
  };

  return (
    <Navbar expand="lg" className="navbarStyle">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbarBrand">Serviexpress</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="navLink">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs" className="navLink">Quiénes Somos</Nav.Link>
            <Nav.Link as={Link} to="/Ready" className="navLink">Express</Nav.Link>
           
            <Dropdown align="end">
              <Dropdown.Toggle variant="link" id="dropdown-profile" className="profile-toggle">
                <Image src={perfilImage} roundedCircle width="30" height="30" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile" className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faUserCircle} className="menu-icon" /> Perfil
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/config" className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faCog} className="menu-icon" /> Configuración
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/CreateCompany" className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faBuilding} className="menu-icon" /> Mi empresa
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Create" className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faBuilding} className="menu-icon" />Iniciar sesion
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout} className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" /> Cerrar Sesión
                </Dropdown.Item>
                <Dropdown.Divider /> {/* Separador */}
                <Dropdown.Item as={Link} to="/dashboard" className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" /> Panel de Control
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/notifications" className="navLink dropdown-item-custom">
                  <FontAwesomeIcon icon={faBell} className="menu-icon" /> Notificaciones
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nave;
