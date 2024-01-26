import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import './SuccessPage.css'

const SuccessPage = () => {
    
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
    useEffect (() => {
          try {
            const userSession = sessionStorage.getItem('userSession'); 
            const user = JSON.parse(userSession);

            const request={
                "fullName":user.fullname,
                "email":user.email,
                "message":'Thank you for booking the event in VIvid VIbes, here is your order confirmation'
            }
            console.log(user)
            const response = axios.post('http://localhost:5000/user/checkout',request,{}); 
            console.log(user)
            // Replace with your actual backend endpoint
            setUsers(response.data); // Assuming your data is an array of user objects
          } catch (error) {
            setError('Error fetching data');
          }
});
  return (
    <div className='success'>
    <div className="success-container">
      <h1>Success!</h1>
      <p>Your Event has been successfully Booked.</p>
      {/* Add any additional information or instructions for the user */}
      <p>Thank you for using our service.</p>
    </div>
    <br/><br/>
    <br/><br/>

    </div>

  );
};

export default SuccessPage;