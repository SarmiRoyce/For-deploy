// import React from 'react';
// import '../Pages/Admin.css'

// function Admin() {
//   return (
//     <div>
//     <div>

//     <h1>Dashboard</h1>

//     <div className='sidebar'>
//         <ul>
//             <li><a href='/dashboard'>Dashboard</a></li>
//             <li><a href='/users'>User Management</a></li>
//             <li><a href='/Pro'>Beauticians</a></li>
//             <li><a href='/settings'>Settings</a></li>
//         </ul>
//     </div>

//     <section>
//         <h2>Welcome, Admin!</h2>
//     </section>
    
//     <div className='main-content'>
//         <div className='user-info'>
//             {/* <h3>Admin</h3> */}
//             <button>Logout</button>
//         </div>

//     <footer className='foot'>
//         <p>&copy; 2024 Admin Panel</p>
//     </footer>
//     </div>
//     </div>

//     <div className='Data table'>

// <table border="10">
// <thead className='Profile5'><br/>
//   <tr>
//     <th>Name</th>
//     <th>Email</th>
//     <th>Role</th>
//     <th>Edit</th>
//     <th>Delete</th>
//     <th>Verify</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><button style={{backgroundColor:'green'}}>Edit</button></td>
//     <td><button style={{backgroundColor:'red'}}>Delete</button></td>
//     <td><button >Verify</button></td>
//   </tr>

// </tbody>
// </table>
// </div>
// </div>


// )
// }

// export default Admin






















// EDIT, DELETE

// import React, { useState, useEffect } from 'react';
// import '../Pages/Admin.css';

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
//   const [editUser, setEditUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const response = await fetch('http://localhost:3002/beautician/view');
//     const data = await response.json();
//     setUsers(data);
//   };

//   const handleCreateUser = async () => {
//     const response = await fetch('http://localhost:3002/beautician/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     });
//     const newUserWithId = await response.json();
//     setUsers([...users, newUserWithId]);
//     setNewUser({ name: '', email: '', role: '' });
//   };

//   const handleUpdateUser = async (id) => {
//     const response = await fetch(`http://localhost:3002/beautician/update/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editUser),
//     });
//     const updatedUser = await response.json();
//     setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
//     setEditUser(null);
//   };

//   const handleDeleteUser = async (id) => {
//     await fetch(`http://localhost:3002/beautician/delete/${id}`, {
//       method: 'DELETE',
//     });
//     setUsers(users.filter((user) => user._id !== id));
//   };

//   const handleEditButtonClick = (user) => {
//     setEditUser(user);
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <div className='sidebar'>
//         <ul style={{marginTop:'100px'}}>
//           <li><a href='/'>Home</a></li>
//           <li><a href='/users'>User Management</a></li>
//           <li><a href='/Profile'>Beauticians</a></li>
//           <li><a href='/Contact'>Contact Us</a></li>
//           {/* <li><a href='/settings'>Settings</a></li> */}
//         </ul>
//       </div>

//       <section>
//         <h2 style={{marginLeft:'300px'}}>Welcome, Admin!</h2>
//       </section>

//       <div className='main-content'>
//         <div className='user-info'>
//           <button>Logout</button>
//         </div>
//       </div>

//       <div className='data-table'>
//         <table border="10">
//           <thead className='Profile5'>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               {/* <th>Role</th> */}
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 {/* <td>{user.role}</td> */}
//                 <td><button style={{ backgroundColor: 'green' }} onClick={() => handleEditButtonClick(user)}>Edit</button></td>
//                 <td><button style={{ backgroundColor: 'red' }} onClick={() => handleDeleteUser(user._id)}>Delete</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className='user-form'>
//         <h2>{editUser ? 'Edit User' : 'Add New User'}</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={editUser ? editUser.name : newUser.name}
//           onChange={(e) => editUser ? setEditUser({ ...editUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={editUser ? editUser.email : newUser.email}
//           onChange={(e) => editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
//         />
//         {/* <input
//           type="text"
//           placeholder="Role"
//           value={editUser ? editUser.role : newUser.role}
//           onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//         /> */}
//         <button onClick={editUser ? () => handleUpdateUser(editUser._id) : handleCreateUser}>
//           {editUser ? 'Update User' : 'Add User'}
//         </button>
//       </div>

    
//     </div>
//   );
// }

// export default Admin;

 






import React, { useState, useEffect } from 'react';
import '../Pages/Admin.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
    fetchPayments();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3002/beautician/view');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await fetch('http://localhost:3002/payments');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const response = await fetch('http://localhost:3002/beautician/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const newUserWithId = await response.json();
      setUsers([...users, newUserWithId]);
      setNewUser({ name: '', email: '', role: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdateUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/beautician/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editUser),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const updatedUser = await response.json();
      setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
      setEditUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/beautician/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleVerifyBeautician = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/beautician/verify/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const updatedUser = await response.json();
      setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
    } catch (error) {
      console.error('Error verifying beautician:', error);
    }
  };

  const handleEditButtonClick = (user) => {
    setEditUser(user);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className='sidebar'>
        <ul style={{marginTop:'100px'}}>
          <li><a href='/'>Home</a></li>
          <li><a href='/users'>User Management</a></li>
          <li><a href='/Profile'>Beauticians</a></li>
          <li><a href='/Contact'>Contact Us</a></li>
          {/* <li><a href='/settings'>Settings</a></li> */}
        </ul>
      </div>

      <section>
        <h2 style={{marginLeft:'300px'}}>Welcome, Admin!</h2>
      </section>

      <div className='main-content'>
        <div className='user-info'>
          <button>Logout</button>
        </div>
      </div>

      <div className='data-table'>
        <h3>Beauticians</h3>
        <table border="10">
          <thead className='Profile5'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.verified ? 'Yes' : 'No'}</td>
                <td>
                  <button style={{ backgroundColor: 'green' }} onClick={() => handleEditButtonClick(user)}>Edit</button>
                </td>
                <td>
                  <button style={{ backgroundColor: 'red' }} onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </td>
                <td>
                  {!user.verified && (
                    <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleVerifyBeautician(user._id)}>
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>User Payments</h3>
        <table border="10">
          <thead className='Profile5'>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.user}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='user-form'>
        <h2>{editUser ? 'Edit User' : 'Add New User'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={editUser ? editUser.name : newUser.name}
          onChange={(e) => editUser ? setEditUser({ ...editUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={editUser ? editUser.email : newUser.email}
          onChange={(e) => editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={editUser ? () => handleUpdateUser(editUser._id) : handleCreateUser}>
          {editUser ? 'Update User' : 'Add User'}
        </button>
      </div>
    </div>
  );
}

export default Admin;
