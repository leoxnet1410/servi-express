import React, { useState } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import AutocompleteInput from './AutoComplete';

const Ready = () => {
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleServiceChange = (e) => setService(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Maneja el envío del formulario, por ejemplo, enviando los datos a una API
    console.log({ address, price, service, description, photo });
  };

  return (
    <Container className="request-servicio-container mt-5">
      <h2>Solicitar servicio</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="address" className="form-group">
          <Form.Label>Dirección</Form.Label>
          <AutocompleteInput address={address} setAddress={setAddress} />
        </Form.Group>
        <Form.Group controlId="price" className="form-group">
          <Form.Label>Precio Ofrecido</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={handlePriceChange}
            placeholder="Ingresa el precio ofrecido"
            required
          />
        </Form.Group>
        <Form.Group controlId="service" className="form-group">
          <Form.Label>Servicio Necesitado</Form.Label>
          <Form.Control
            type="text"
            value={service}
            onChange={handleServiceChange}
            list="service-options"
            placeholder="Selecciona o ingresa un servicio"
            required
          />
          <datalist id="service-options">
            <option value="Taxi" />
            <option value="Delivery" />
            <option value="Ride Sharing" />
          </datalist>
        </Form.Group>
        <Form.Group controlId="description" className="form-group">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Ingresa una descripción"
            required
          />
        </Form.Group>
        <Form.Group controlId="photo" className="form-group">
          <Form.Label>Agregar Foto</Form.Label>
          <Form.Control type="file" onChange={handlePhotoChange} />
          {photoPreview && (
            <div className="mt-3">
              <p>Vista previa de la foto:</p>
              <Image src={photoPreview} alt="Vista previa" thumbnail className="photo-preview" />
            </div>
          )}
        </Form.Group>
        <Button type="submit" className="btn btn-primary mt-3">
          Solicitar
        </Button>
      </Form>
    </Container>
  );
};

export default Ready;
