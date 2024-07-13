

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Nav from './navbar/navegation';
import Create from './form/Create'; // Cambiado para coincidir con el nombre del archivo en minúsculas

import Company from './company/company';
import { Venta } from './company/seller'; // Cambiado para coincidir con el nombre del archivo en minúsculas
import Filtro from './navbar/filter';
import Inicio from './services/start';
import Ready from "./ready/Ready";
import Conocenos from "./aboutUs";
import Profile from "./navbar/Profile";
import  CompanyRegistration from "./form/CreateCompany"
import ServiceProviderDashboard from "./ProviderDashboard"
import ProfileConfig from "./confi";
import Appointments from "./diary";

import './scss/App.scss';



// Componente de ruta genérico que incluye el componente Filtro
function RutaConFiltro({ element }) {
  return (
    <Row className="">
      <Col xs={3} className="px-0">
        <Filtro />
      </Col>
      <Col xs={9} className="px-0">
        {element}
      </Col>
    </Row>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="main">
        <Row>
          <Col xs={12} className="px-0">
            <Nav />
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Create" element={<Create/>} />
          <Route path="/company" element={<RutaConFiltro element={<Company />} />} />
          <Route path="/seller" element={<RutaConFiltro element={<Venta />} />} />
          <Route path="/aboutUs" element={<Conocenos/>} />
          <Route path="/Ready" element={<Ready/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/CreateCompany" element={<CompanyRegistration/>} />
          <Route path="/ProviderDashboard" element={<ServiceProviderDashboard/>} />
          <Route path="/config" element={<ProfileConfig/>} />
          <Route path="/diary" element={<Appointments/>} />

        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;