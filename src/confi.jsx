import React, { useState } from 'react';
import Webcam from 'react-webcam';


const ProfileConfig = () => {
  const [user, setUser] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    avatar: 'https://via.placeholder.com/150',
    createdDate: '28-Jun-2019',
    language: 'Español (España)',
    lastLogin: 'Hace 27 minutos',
    gender: 'Masculino',
    notifications: true,
    role: 'ADMINISTRADOR',
    phone: '',
    birthDate: '',
    address: '',
    idCardFront: '',
    idCardBack: '',
    isClient: false,
    isServiceProvider: false,
  });

  const [newAvatar, setNewAvatar] = useState(null);
  const [newIdCardFront, setNewIdCardFront] = useState(null);
  const [newIdCardBack, setNewIdCardBack] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewAvatar(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleIdCardFrontChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewIdCardFront(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleIdCardBackChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewIdCardBack(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (newAvatar) {
      setUser((prevUser) => ({
        ...prevUser,
        avatar: newAvatar,
      }));
    }
    if (newIdCardFront) {
      setUser((prevUser) => ({
        ...prevUser,
        idCardFront: newIdCardFront,
      }));
    }
    if (newIdCardBack) {
      setUser((prevUser) => ({
        ...prevUser,
        idCardBack: newIdCardBack,
      }));
    }
    // Aquí puedes añadir el código para guardar los cambios en el servidor o en la base de datos
  };

  const handleCapture = (dataUri) => {
    setNewAvatar(dataUri);
    setShowWebcam(false);
  };

  return (
    <div className="container mt-4 profile-config">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img src={newAvatar || user.avatar} alt={user.name} />
                <div className="overlay">
                  <button className="btn btn-secondary" onClick={() => document.getElementById('fileInput').click()}>Subir Foto</button>
                  <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleAvatarChange} />
                  <button className="btn btn-secondary" onClick={() => setShowWebcam(!showWebcam)}>Tomar Foto</button>
                </div>
              </div>
              {showWebcam && (
                <div className="mb-3">
                  <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    width={300}
                    videoConstraints={{ facingMode: "user" }}
                    onUserMediaError={() => setShowWebcam(false)}
                    onUserMedia={() => setShowWebcam(true)}
                  >
                    {({ getScreenshot }) => (
                      <button className="btn btn-primary" onClick={() => handleCapture(getScreenshot())}>Capturar</button>
                    )}
                  </Webcam>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" className="form-control" id="phone" name="phone" value={user.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="birthDate" name="birthDate" value={user.birthDate} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Dirección Actual</label>
                <input type="text" className="form-control" id="address" name="address" value={user.address} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="language">Idioma</label>
                <input type="text" className="form-control" id="language" name="language" value={user.language} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Género</label>
                <input type="text" className="form-control" id="gender" name="gender" value={user.gender} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Recibir notificaciones por correo electrónico?</label>
                <div className="btn-group">
                  <button className={`btn ${user.notifications ? 'btn-success' : 'btn-secondary'}`} onClick={() => setUser((prevUser) => ({ ...prevUser, notifications: !prevUser.notifications }))}>
                    {user.notifications ? 'Sí' : 'No'}
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="idCardFront">Foto del Carnet (Frente)</label>
                <div className="id-card">
                  <img src={newIdCardFront || 'https://via.placeholder.com/300x200'} alt="ID Card Front" />
                  <div className="overlay">
                    <button className="btn btn-secondary" onClick={() => document.getElementById('idCardFrontInput').click()}>Subir Foto</button>
                    <input type="file" id="idCardFrontInput" style={{ display: 'none' }} onChange={handleIdCardFrontChange} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="idCardBack">Foto del Carnet (Reverso)</label>
                <div className="id-card">
                  <img src={newIdCardBack || 'https://via.placeholder.com/300x200'} alt="ID Card Back" />
                  <div className="overlay">
                    <button className="btn btn-secondary" onClick={() => document.getElementById('idCardBackInput').click()}>Subir Foto</button>
                    <input type="file" id="idCardBackInput" style={{ display: 'none' }} onChange={handleIdCardBackChange} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Tipo de Usuario</label>
                <div className="btn-group">
                  <button className={`btn ${user.isClient ? 'btn-success' : 'btn-secondary'}`} onClick={() => setUser((prevUser) => ({ ...prevUser, isClient: !prevUser.isClient }))}>
                    Cliente
                  </button>
                  <button className={`btn ${user.isServiceProvider ? 'btn-success' : 'btn-secondary'}`} onClick={() => setUser((prevUser) => ({ ...prevUser, isServiceProvider: !prevUser.isServiceProvider }))}>
                    Prestador de Servicio
                  </button>
                </div>
              </div>
              <button className="btn btn-save" onClick={handleSave}>Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileConfig;