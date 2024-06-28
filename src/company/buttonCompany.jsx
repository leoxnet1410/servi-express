import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CambiarAEmpresaButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/empresa');
  };

  return (
    <Button className='button' onClick={handleClick}>
      Cambiar a Empresa
    </Button>
  );
};

export default CambiarAEmpresaButton;
