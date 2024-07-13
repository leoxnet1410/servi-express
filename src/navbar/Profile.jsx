import React, { useState } from 'react';

const Profile = () => {
  const [user] = useState({
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

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body text-center">
              <img src={user.avatar} className="rounded-circle mb-3" alt={user.name} width="150" height="150" />
              <h3 className="card-title">{user.name}</h3>
              <p className="card-text text-muted">{user.email}</p>
              <div className="text-left">
                <p><strong>Nombre:</strong> {user.name}</p>
                <p><strong>Correo electrónico:</strong> {user.email}</p>
                <p><strong>Creado:</strong> {user.createdDate}</p>
                <p><strong>Idioma:</strong> {user.language}</p>
                <p><strong>Último inicio de sesión:</strong> {user.lastLogin}</p>
                <p><strong>Género:</strong> {user.gender}</p>
                <p><strong>Recibir notificaciones por correo electrónico?</strong> {user.notifications ? 'Sí' : 'No'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;