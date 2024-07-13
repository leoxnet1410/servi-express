import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card } from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
moment.locale("es");

const localizer = momentLocalizer(moment);

const ApiClient = {
  appointments: {
    all: async () => {
      return [
        {
          date: "2024-07-13T10:00:00",
          patient_name: "John Doe",
          status: "Agendada",
          time: "10:00 AM"
        },
        {
          date: "2024-07-14T14:00:00",
          patient_name: "Jane Smith",
          status: "Completada",
          time: "2:00 PM"
        }
      ];
    }
  }
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  
  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
  };

  const refreshAppointments = () => {
    ApiClient.appointments.all().then((res) => {
      setAppointments(res);
    });
  };

  useEffect(() => {
    refreshAppointments();
  }, []);

  const events = appointments.map((appointment) => {
    const startTime = new Date(appointment.date);
    const clonedDate = new Date(startTime);
    clonedDate.setHours(clonedDate.getHours() + 1);
    return {
      ...appointment,
      start: startTime,
      end: clonedDate,
      title: `${appointment.patient_name}`
    };
  });

  const eventTypeGetter = (event) => {
    let classValue;
    if (event.status === 'Agendada') {
      classValue = 'bg-primary border-0 rounded-0';
    } else if (event.status === 'Completada') {
      classValue = 'bg-success border-0 rounded-0';
    } else {
      classValue = 'bg-danger border-0 rounded-0';
    }
    return { className: classValue };
  };

  const CustomMonthEvent = ({ event }) => (
    <div>
      <p className='mb-0' style={{ fontSize: 14 }}>{event.time} {event.title}</p>
    </div>
  );

  const CustomWeekEvent = ({ event }) => (
    <div>
      <p className='mb-0' style={{ fontSize: 14 }}>{event.title}</p>
    </div>
  );

  const minTime = new Date();
  minTime.setHours(8, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(20, 0, 0);

  return (
    <div className="appointments-container">
      <Card className='rounded-0'>
        <Card.Header className='d-flex flex-row justify-content-between align-items-center'>
          <h2>Visitas</h2>
        </Card.Header>
        <Card.Body>
          <Calendar
            culture='es'
            messages={messages}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="week"
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '700px' }} // Remover si usas .calendar en SCSS
            min={minTime}
            max={maxTime}
          
            eventPropGetter={eventTypeGetter}
            components={{
              month: {
                event: CustomMonthEvent
              },
              week: {
                event: CustomWeekEvent
              }
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Appointments;