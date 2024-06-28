import React, { useState } from 'react';

import Webcam from 'react-webcam';

const Profile = () => {
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
 
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null);
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

  const handleSave = () => {
    if (newAvatar) {
      setUser((prevUser) => ({
        ...prevUser,
        avatar: newAvatar,
      }));
    }
    setIsEditing(false);
  };

  const handleCapture = (dataUri) => {
    setNewAvatar(dataUri);
    setShowWebcam(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body text-center">
              <img src={user.avatar} className="rounded-circle mb-3" alt={user.name} width="150" height="150" />
              <h3 className="card-title">{user.name}</h3>
              <p className="card-text text-muted">{user.email}</p>
              <button className="btn btn-primary mb-3" onClick={() => setIsEditing(!isEditing)}>Editar Perfil</button>
              {isEditing ? (
                <div>
                  <div className="form-group">
                    <label>Foto de Perfil</label>
                    <div className="mb-2">
                      <button className="btn btn-secondary mr-2" onClick={() => document.getElementById('fileInput').click()}>Subir Foto</button>
                      <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleAvatarChange} />
                      <button className="btn btn-secondary" onClick={() => setShowWebcam(!showWebcam)}>Tomar Foto</button>
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
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />
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
                    <div>
                      <button className={`btn ? 'btn-success' : 'btn-secondary'} mr-2`} >Sí</button>
                      <button className={`btn  ? 'btn-success' : 'btn-secondary'}`} >No</button>
                    </div>
                  </div>
                  <button type="button" className="btn btn-success" onClick={handleSave}>Guardar</button>
                </div>
              ) : (
                <div className="text-left">
                  <p><strong>Nombre:</strong> {user.name}</p>
                  <p><strong>Correo electrónico:</strong> {user.email}</p>
                  <p><strong>Creado:</strong> {user.createdDate}</p>
                  <p><strong>Idioma:</strong> {user.language}</p>
                  <p><strong>Último inicio de sesión:</strong> {user.lastLogin}</p>
                  <p><strong>Género:</strong> {user.gender}</p>
                  <p><strong>Recibir notificaciones por correo electrónico?</strong> {user.notifications ? 'Sí' : 'No'}</p>
                </div>
              )}
            </div>
          </div>
          
           
       
      
        </div>
      </div>
    </div>
  );
};

export default Profile;