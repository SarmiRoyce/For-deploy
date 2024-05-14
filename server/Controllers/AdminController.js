import React, { useState, useEffect } from 'react';
import '../Pages/Admin.css';

function Admin() {
  // State to store users data
  const [users, setUsers] = useState([]);

  // Function to fetch users data
  const fetchUsers = () => {
    // Perform fetch request to your backend API to get users data
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  // Fetch users data when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to handle user deletion
  const deleteUser = (userId) => {
    // Perform fetch request to your backend API to delete the user
    fetch(`http://localhost:5000/api/users/${userId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Remove the deleted user from the local state
      setUsers(users.filter(user => user.id !== userId));
    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Sidebar and other elements */}

      <div className='Data table'>
        <table border="10">
          <thead className='Profile5'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button style={{ backgroundColor: 'green' }}>Edit</button></td>
                <td><button style={{ backgroundColor: 'red' }} onClick={() => deleteUser(user.id)}>Delete</button></td>
                <td><button>Verify</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
