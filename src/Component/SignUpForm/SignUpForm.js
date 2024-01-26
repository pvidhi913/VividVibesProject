import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';
import { Form, Button } from 'react-bootstrap';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const errorsCopy = {};

    if (!fullname) {
      errorsCopy.fullname = 'Full Name is required';
      valid = false;
    }

    if (!email) {
      errorsCopy.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorsCopy.email = 'Please enter a valid email address';
      valid = false;
    } 
    if (!password) {
      errorsCopy.password = 'Password is required';
      valid = false;
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/.test(password)) {
      errorsCopy.password = 'Password must contain at least one uppercase letter, one number, and one special character';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    // Clear the full name error message on typing
    setErrors((prevErrors) => ({ ...prevErrors, fullname: '' }));
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
        fullname: fullname,
        email: email,
        password: password
      };

      const url = `http://localhost:5000/user/create`;

      const response = await axios.post(url, requestBody);

      if (response.data.isSuccess) {
        setResult('SignUp Successful');
        window.alert('SignUp Successful');
        window.location="/login";
      } else {
        setResult('An error occurred while trying to authenticate. Please try again.');
      }
    } catch (error) {
      setResult('An error occurred while trying to authenticate. Please try again.');
    }
  };

  return (
      <div className='sign-background'>
       
        <Form className="cmxform" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="FullName"
            placeholder="FullName"
            value={fullname}
            onChange={handleFullNameChange}
          />
          {errors.fullname && <div className="error red-text">{errors.fullname}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          {errors.email && <div className="error red-text">{errors.email}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <div className="error red-text">{errors.password}</div>}
          <Form.Text className="text-muted">
            {result && <div>{JSON.stringify(result)}</div>}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUpForm;
