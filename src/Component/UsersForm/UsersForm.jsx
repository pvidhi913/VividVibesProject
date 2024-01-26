import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import camera icon
import './UsersForm.css'; // Import the CSS file

function UsersForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [file, setFile] = useState(null); // New state for the file

  const [result, setResult] = useState(null);
  const [thumbnail, setThumbnail] = useState(null); // New state for thumbnail
  const [errors, setErrors] = useState({});

  // Load user data from localStorage when the component mounts
  useEffect(() => {
    const userData = sessionStorage.getItem('userSession');
        if (userData) {
      const user = JSON.parse(userData);
      setEmail(user.email || '');
      setFullName(user.fullname || '');

      // Set the thumbnail if there is a path or URL saved
      if (user.profilePicture) {
        setThumbnail(user.profilePicture); // Assuming 'profilePicture' is the key for the image
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      // Construct the requestBody with non-empty fields
      const requestBody = {};
      
      if (fullname.trim() !== '') {
        requestBody.fullname = fullname;
      }
  
      if (password.trim() !== '') {
        requestBody.password = password;
      }
  
      if (thumbnail) {
        requestBody.profilePicture = thumbnail;
      }

      const url = `http://localhost:5000/user/edit/${email}`;
      const response = await axios.put(url, requestBody, {});

      if (response.data.isSuccess) {
        setResult('Updated Successfully');
      } else {
        console.log(thumbnail);
        setResult('An error occurred while trying to authenticate. Please try again.');
      }
    } catch (error) {
      setResult('An error occurred while trying to authenticate. Please try again.');
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Full Name
    if (!fullname.trim()) {
      newErrors.fullname = 'Full Name is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };



  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Display image preview
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setThumbnail(null);
    }

    setFile(selectedFile);
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };
  

  return (
    <>
      <div className='user-background'>
      <Form onSubmit={handleSubmit} className="custom-container">
      <h1 className='heading'>Users Update</h1>
        <Form.Group controlId="formBasicProfilePicture">
          <Form.Label>Profile Picture</Form.Label>
          <div className="profile-picture-container" onClick={handleIconClick}>
            {thumbnail ? (
              <img src={thumbnail} alt="Profile Thumbnail" className="thumbnail" />
            ) : (
              <>
                <div className="camera-icon">
                  <FontAwesomeIcon icon={faUser} size="3x" />
                </div>
              </>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="FullName"
            placeholder="FullName"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullname && <div className="error">{errors.fullname}</div>}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            readOnly={true} // Set the email input field as read-only
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Change Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </Form.Group>

        <Form.Group controlId="formBasicResult">
          <Form.Text className="text-muted">
            {result && <div>{JSON.stringify(result)}</div>}
          </Form.Text>
        </Form.Group>

        {/* Display validation errors for Profile Picture */}
        <div className="error-message">
          {errors.file && <div>{errors.file}</div>}
        </div>

        <Button className="custom-submit-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
}

export default UsersForm;