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
























import React, { useState, useEffect } from 'react';
import '../Pages/Admin.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3002/beautician/view');
    const data = await response.json();
    setUsers(data);
  };

  const handleCreateUser = async () => {
    const response = await fetch('http://localhost:3002/beautician/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const newUserWithId = await response.json();
    setUsers([...users, newUserWithId]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const handleUpdateUser = async (id) => {
    const response = await fetch(`http://localhost:3002/beautician/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editUser),
    });
    const updatedUser = await response.json();
    setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
    setEditUser(null);
  };

  const handleDeleteUser = async (id) => {
    await fetch(`http://localhost:3002/beautician/delete/${id}`, {
      method: 'DELETE',
    });
    setUsers(users.filter((user) => user._id !== id));
  };

  const handleEditButtonClick = (user) => {
    setEditUser(user);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className='sidebar'>
        <ul style={{marginTop:'100px'}}>
          <li><a href='/dashboard'>Dashboard</a></li>
          <li><a href='/users'>User Management</a></li>
          <li><a href='/Profile'>Beauticians</a></li>
          <li><a href='/settings'>Settings</a></li>
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
        <table border="10">
          <thead className='Profile5'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Role</th> */}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.role}</td> */}
                <td><button style={{ backgroundColor: 'green' }} onClick={() => handleEditButtonClick(user)}>Edit</button></td>
                <td><button style={{ backgroundColor: 'red' }} onClick={() => handleDeleteUser(user._id)}>Delete</button></td>
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
        {/* <input
          type="text"
          placeholder="Role"
          value={editUser ? editUser.role : newUser.role}
          onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
        /> */}
        <button onClick={editUser ? () => handleUpdateUser(editUser._id) : handleCreateUser}>
          {editUser ? 'Update User' : 'Add User'}
        </button>
      </div>

      {/* <footer className='foot'>
        <p>&copy; 2024 Admin Panel</p>
      </footer> */}
    </div>
  );
}

export default Admin;









//  <div className='dashboard'>
        // <h2>Dashboard</h2>
    // <p>Welcome to the admin panel.</p>
    // </div> 
// 
    //     <div className='users'>
    //         <h2>User Management</h2>
    //         <p>Manage your users here.</p>
    //     </div> 

    //     <div className='settings'>
    //         <h2>Settings</h2>
    //         <p>Configure application settings.</p>
    //     </div> 
    // </div>
    // </div>


    // <div>
    //     <ul className='navbar' style={{background:'grey',fontWeight:'800'}}>
    //         <li className='design5'>
    //             <a className='nav-link' href='/'>Home</a>
    //         </li>
    //         <li>
    //             <a className='nav-link' href='/Services'>Our services</a>
    //         </li>
    //         <li>
    //             <a className='nav-link' href='/Profile'>Beauticians</a>
    //         </li>
    //         <li>
    //             <a className='nav-link' href='/Contact'>Contact Us</a>
    //         </li>
    //     </ul>
      
    // </div>


 