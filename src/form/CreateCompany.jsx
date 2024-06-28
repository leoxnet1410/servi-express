import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faEnvelope, faPhone, faInfoCircle, faCamera, faUpload, faTimes,faCog } from '@fortawesome/free-solid-svg-icons';
import { useDropzone } from 'react-dropzone';
import Webcam from 'react-webcam';

// Array de servicios con iconos
const servicios = [
  { nombre: 'Carpintería'},
  { nombre: 'Plomería'},
  { nombre: 'Pintura'},
  { nombre: 'Electricidad' },
  { nombre: 'Mantenimiento'},
  { nombre: 'Reparaciones de Carpintería'},
  { nombre: 'Muebles a Medida' },
  { nombre: 'Instalación de Puertas y Ventanas' },
  { nombre: 'Tarima Flotante' },
  { nombre: 'Cocinas a Medida' },
  { nombre: 'Armarios y Vestidores'},
  { nombre: 'Restauración de Muebles' },
  { nombre: 'Pérgolas y Decks' },
  { nombre: 'Reparaciones Generales de Plomería' },
  { nombre: 'Desatascos'},
  { nombre: 'Instalación de Tuberías' },
  { nombre: 'Reparación de Fugas' },
  { nombre: 'Mantenimiento de Calentadores' },
  { nombre: 'Instalación de Sanitarios' },
  { nombre: 'Sistemas de Agua Potable' },
  { nombre: 'Detección y Reparación de Humedades' },
  { nombre: 'Pintura Interior y Exterior'},
  { nombre: 'Empapelado' },
  { nombre: 'Estuco y Texturizado' },
  { nombre: 'Barnizado y Lacado' },
  { nombre: 'Pintura de Pisos y Paredes' },
  { nombre: 'Quitar Gotelé' },
  { nombre: 'Decoración de Interiores' },
  { nombre: 'Instalaciones Eléctricas' },
  { nombre: 'Reparaciones Eléctricas' },
  { nombre: 'Mantenimiento Eléctrico' },
];

const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    email: '',
    phone: '',
    description: '',
    sector: '',
    photos: []
  });

  const [webcamEnabled, setWebcamEnabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Aquí podrías agregar la lógica para enviar los datos a tu servidor o API.
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFormData({
      ...formData,
      photos: [
        ...formData.photos,
        ...acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      ]
    });
  }, [formData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setFormData({
      ...formData,
      photos: [...formData.photos, { preview: imageSrc }]
    });
    setWebcamEnabled(false);
  }, [formData]);

  const removePhoto = (index) => {
    setFormData({
      ...formData,
      photos: formData.photos.filter((_, i) => i !== index)
    });
  };

  const webcamRef = useRef(null);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="justify-content-md-center w-100">
        <Col md={6} className="form-wrapper">
          <h2 className="text-center mb-4">Registro de Empresa</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCompanyName" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
                <Form.Control
                  type="text"
                  name="companyName"
                  placeholder="Nombre de la Empresa"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faInfoCircle} /></InputGroup.Text>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Descripción"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  style={{ resize: 'none' }} 
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formSector" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faCog} /></InputGroup.Text>
                <Form.Select 
                  name="sector" 
                  value={formData.sector} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Selecciona un rubro</option>
                  {servicios.map((servicio, index) => (
                    <option key={index} value={servicio.nombre}>
                      {servicio.nombre}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPhotos" className="mb-3">
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <Button variant="outline-secondary" className="w-100">
                  <FontAwesomeIcon icon={faUpload} /> Subir Fotos
                </Button>
              </div>
              <Button variant="outline-secondary" className="w-100 mt-2" onClick={() => setWebcamEnabled(true)}>
                <FontAwesomeIcon icon={faCamera} /> Tomar Foto
              </Button>
            </Form.Group>

            {webcamEnabled && (
              <div className="webcam-container mb-3">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width="100%"
                />
                <Button variant="primary" className="w-100 mt-2" onClick={capture}>Capturar Foto</Button>
              </div>
            )}

            <div className="photo-previews mb-3">
              {formData.photos.map((photo, index) => (
                <div key={index} className="photo-wrapper">
                  <img src={photo.preview} alt={`Foto ${index + 1}`} className="img-thumbnail" />
                  <Button variant="danger" size="sm" className="remove-btn" onClick={() => removePhoto(index)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                </div>
              ))}
            
            </div>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Registrar Empresa
            </Button>
            <Button variant="success" type="button" className="w-100 mt-2" onClick={() => alert('Empresa registrada y publicada')}>
              Registrar y Publicar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyRegistration;