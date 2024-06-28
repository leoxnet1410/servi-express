import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHammer, faWrench, faPaintBrush, faBolt, faCog, faScrewdriver, faDoorOpen,
  faUtensils, faTree, faFire, faToilet, faFaucet, faWater, faPalette, faTrowel,
  faSprayCan, faEraser, faPaintbrush, faLightbulb, faTools, faBox, faBroom
} from '@fortawesome/free-solid-svg-icons';

const Filtro = ({ handleFilter }) => {
  const [filtroActivo, setFiltroActivo] = useState(null);

  const handleClick = (servicio) => {
    setFiltroActivo(servicio);
    // Redirigir al componente Empresa con el servicio seleccionado como parámetro en la URL
    window.location.href = `/empresa?servicio=${encodeURIComponent(servicio)}`;
  };

  const servicios = [
    { nombre: 'Carpintería', icono: faHammer },
    { nombre: 'Plomería', icono: faWrench },
    { nombre: 'Pintura', icono: faPaintBrush },
    { nombre: 'Electricidad', icono: faBolt },
    { nombre: 'Mantenimiento', icono: faCog },
    { nombre: 'Reparaciones de Carpintería', icono: faScrewdriver },
    { nombre: 'Muebles a Medida', icono: faUtensils },
    { nombre: 'Instalación de Puertas y Ventanas', icono: faDoorOpen },
    { nombre: 'Tarima Flotante', icono: faTree },
    { nombre: 'Cocinas a Medida', icono: faUtensils },
    { nombre: 'Armarios y Vestidores', icono: faBox },
    { nombre: 'Restauración de Muebles', icono: faPaintBrush },
    { nombre: 'Pérgolas y Decks', icono: faTree },
    { nombre: 'Reparaciones Generales de Plomería', icono: faWrench },
    { nombre: 'Desatascos', icono: faBroom },
    { nombre: 'Instalación de Tuberías', icono: faFaucet },
    { nombre: 'Reparación de Fugas', icono: faWater },
    { nombre: 'Mantenimiento de Calentadores', icono: faFire },
    { nombre: 'Instalación de Sanitarios', icono: faToilet },
    { nombre: 'Sistemas de Agua Potable', icono: faFaucet },
    { nombre: 'Detección y Reparación de Humedades', icono: faWater },
    { nombre: 'Pintura Interior y Exterior', icono: faPalette },
    { nombre: 'Empapelado', icono: faPaintBrush },
    { nombre: 'Estuco y Texturizado', icono: faTrowel },
    { nombre: 'Barnizado y Lacado', icono: faSprayCan },
    { nombre: 'Pintura de Pisos y Paredes', icono: faPaintBrush },
    { nombre: 'Quitar Gotelé', icono: faEraser },
    { nombre: 'Decoración de Interiores', icono: faPaintbrush },
    { nombre: 'Instalaciones Eléctricas', icono: faBolt },
    { nombre: 'Reparaciones Eléctricas', icono: faLightbulb },
    { nombre: 'Mantenimiento Eléctrico', icono: faTools },
  ];

  return (
    <div className="filtro-container h-100">
      <h2>Serviexpress</h2>
      <div className="filtro-content">
        <InputGroup className="mb-3">
          <FormControl placeholder="Buscar" />
         
        </InputGroup>

        {/* Mapea los servicios para renderizar botones */}
        {servicios.map((servicio) => (
          <div key={servicio.nombre} className="mb-2" style={{ width: '100%' }}>
            <Button
              variant={filtroActivo === servicio.nombre ? 'primary' : 'outline-secondary'}
              className="filtro-button w-100"
              onClick={() => handleClick(servicio.nombre)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>{servicio.nombre}</span>
                <FontAwesomeIcon icon={servicio.icono} />
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtro;