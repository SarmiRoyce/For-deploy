import React from 'react';
import '../Pages/Admin.css'

function Admin() {
  return (
    <div>
    <div>

    <h1>Dashboard</h1>

    {/* <nav>
        <ul>
            <li><a href='/'>Dashboard</a></li>
            <li><a href='/'>Users</a></li>
            <li><a href='/'>Settings</a></li>
        </ul>
    </nav> */}
    <div className='sidebar'>
        <ul>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li><a href='/users'>User Management</a></li>
            <li><a href='/Pro'>Beauticians</a></li>
            <li><a href='/settings'>Settings</a></li>
        </ul>
    </div>

    <section>
        <h2>Welcome, Admin!</h2>
    </section>
    
    <div className='main-content'>
        <div className='user-info'>
            {/* <h3>Admin</h3> */}
            <button>Logout</button>
        </div>

    <footer className='foot'>
        <p>&copy; 2024 Admin Panel</p>
    </footer>
    </div>
    </div>

    <div className='Data table'>

<table border="10">
<thead className='Profile5'><br/>
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
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button style={{backgroundColor:'green'}}>Edit</button></td>
    <td><button style={{backgroundColor:'red'}}>Delete</button></td>
    <td><button >Verify</button></td>
  </tr>

</tbody>
</table>
</div>
</div>


)
}

export default Admin







{/* <div className='dashboard'>
        <h2>Dashboard</h2>
    <p>Welcome to the admin panel.</p>
    </div> */}

    {/* //     <div className='users'>
    //         <h2>User Management</h2>
    //         <p>Manage your users here.</p>
    //     </div> */}

    {/* //     <div className='settings'>
    //         <h2>Settings</h2>
    //         <p>Configure application settings.</p>
    //     </div> */}
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


 