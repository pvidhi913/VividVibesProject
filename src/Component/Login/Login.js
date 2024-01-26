import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const errorsCopy = {};

    if (!email) {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    if (!password) {
      errorsCopy.password = 'Password is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear the email error message on typing
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear the password error message on typing
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const requestBody = {
        email: email,
        password: password
      };

      // Determine the URL based on the role
      const url = role === 'User'
        ? `http://localhost:5000/user/authenticate`
        : `http://localhost:5000/admin/authenticate`;

      const response = await axios.post(url, requestBody);
      if (response.data.authenticated) {
        if (role === 'User') {
          // Handle user session
          sessionStorage.setItem('userSession', JSON.stringify(response.data.user));
          window.location = "/"; // Navigate to home page
        } else if (role === 'Admin') {
          // Handle admin session
          sessionStorage.setItem('adminSession', JSON.stringify(response.data.admin));
          window.location = "/admin"; // Navigate to admin page
        }
        setResult('Login Successful');
      } else {
        setResult('Authentication failed. Please check your credentials.'); // Set error message
      }
    } catch (error) {
      setResult('An error occurred while trying to authenticate. Please try again.');
    }
  };

  return (
    <div className="page-background">
      <Form className="cmxform" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="email">
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="password">
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              id="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 align-items-center">
          <Form.Label as="legend" column sm={2}>
            Role
          </Form.Label>
          <Col sm={4}>
            <Form.Check
              type="radio"
              label="User"
              name="roleRadios"
              id="radioUser"
              value="User"
              checked={role === 'User'}
              onChange={() => setRole('User')}
            />
            <Form.Check
              type="radio"
              label="Admin"
              name="roleRadios"
              id="radioAdmin"
              value="Admin"
              checked={role === 'Admin'}
              onChange={() => setRole('Admin')}
            />
          </Col>
        </Form.Group>

        {result && <div>{JSON.stringify(result)}</div>}

        <Button type="submit" className="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
