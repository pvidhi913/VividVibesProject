import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'

function Admin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/getAll'); // Replace with your actual backend endpoint
        setUsers(response.data); // Assuming your data is an array of user objects
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  const handleViewUser = (userId) => {
    // Logic for viewing a user
    console.log(`View user with ID: ${userId}`);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5001/user/delete/${userId}`); // Replace with your actual delete endpoint
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div className='admin-background'>
      <h1>Admin Dashboard</h1>

      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>
              
                <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
