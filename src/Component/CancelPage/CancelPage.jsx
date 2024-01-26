import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import './CancelPage.css'

const CancelPage = () => {
    
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
    useEffect (() => {
          try {
            const userSession = sessionStorage.getItem('userSession'); 
            const user = JSON.parse(userSession);

            const request={
                "fullName":user.fullname,
                "email":user.email,
                "message":'Sorry the booking for your event is not successful because of payment failure'
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
    <div>
      <div className="Cancel-container">
      <h1>Sorry!</h1>
      <p>Your payment has been Cancelled.</p>
      {/* Add any additional information or instructions for the user */}
      <p>Thank you for using our service.</p>
    </div>
    <br/><br/>
    </div>
  );
};

export default CancelPage;