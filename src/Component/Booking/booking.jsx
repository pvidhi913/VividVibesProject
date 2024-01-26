
import './booking.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { Form, Button, Alert } from 'react-bootstrap';

const MyForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [formErrors, setFormErrors] = useState({});

  //validations
  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
        errors.name = 'Name is required';
      } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        errors.name = 'Name should contain only letters';
      }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!eventType) {
      errors.eventType = 'Event type is required';
    }

    if (!selectedDate) {
      errors.selectedDate = 'Date is required';
    }

    if (!selectedTime) {
      errors.selectedTime = 'Time is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (validateForm()) {
      // Handle form submission with selectedDate, selectedTime, name, email, and eventType
      console.log('Selected Date:', selectedDate);
      console.log('Selected Time:', selectedTime);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Event Type:', eventType);
    }
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedTime('');
    setName('');
    setEmail('');
    setEventType('');
    setFormErrors({});
  };

  return (
    <div>
      <h1>Book Your Event With Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={handleNameChange}
            value={name}
            isInvalid={formErrors.name}
          />
          <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            isInvalid={formErrors.email}
          />
          <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEventType">
          <Form.Label>Events</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleEventTypeChange}
            value={eventType}
            isInvalid={formErrors.eventType}
          >
            <option>Select Event Type</option>
            <option value="1">Marriages</option>
            <option value="2">Festivals</option>
            <option value="3">Parties</option>
            <option value="4">Indian Festivals</option>
            <option value="5">Misc.Events</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{formErrors.eventType}</Form.Control.Feedback>
        </Form.Group>

        <div className="mb-3">
          <label htmlFor="datePicker">Select Date:</label>
          <DatePicker
            id="datePicker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className={`form-control ${formErrors.selectedDate ? 'is-invalid' : ''}`}
 
            
          />
          {formErrors.selectedDate && (
            <div className="invalid-feedback">{formErrors.selectedDate}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="timePicker">Select Time:</label>
          <TimePicker
            id="timePicker"
            onChange={handleTimeChange}
            value={selectedTime}
            disableClock={true}
            className={formErrors.selectedTime ? 'is-invalid' : ''}
          />
          {formErrors.selectedTime && (
            <div className="invalid-feedback">{formErrors.selectedTime}</div>
          )}
        </div>

        <Button variant="primary" type="submit" className="mr-2">
          Submit
        </Button>
        <Button variant="secondary" type="button" onClick={handleReset}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
