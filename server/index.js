const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')

const bodyParser = require('body-parser');
const app = express()
app.use(express.json())
// app.use(cors()) 
app.use(bodyParser.json())

// mongoose.connect('')


const connectDb = require("../server/DB/Connect")
connectDb()




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

// function App() {
//     const [user, setUser] = useState(null);

//     const login = async (username, password) => {
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password })
//         });
//         if (response.ok) {
//             const { token } = await response.json();
//             const decoded = jwtDecode(token);
//             setUser({ ...decoded });
//         } else {
//             alert('Login failed!');
//         }
//     };

//     return (
//         <Router>
//             <Route path="/" exact>
//                 {user ? (user.role === 'admin' ? <Redirect to="/admin" /> : <Redirect to="/home" />) : <LoginForm onLogin={login} />}
//             </Route>
//             <Route path="/home" component={HomePage} />
//             <Route path="/admin" component={AdminPage} />
//         </Router>
//     );
// }

// function LoginForm({ onLogin }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onLogin(username, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//             </label>
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// function HomePage() {
//     return <div>Welcome to the user home page!</div>;
// }

// function AdminPage() {
//     return <div>Welcome to the admin dashboard!</div>;
// }


// export default App;





// BEAUTICIAN FETCHING
// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import './Beauticians.css';

// function Beautician() {
//   // State to store the fetched beautician data
//   const [beauticians, setBeauticians] = useState([]);

//   // Effect to fetch beautician data when the component mounts
//   useEffect(() => {
//     // Fetch data from your backend API endpoint
//     fetch('http://localhost:5000/api/beauticians')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Set the fetched data to the state
//         setBeauticians(data);
//       })
//       .catch(error => {
//         // Handle error
//         console.error('Error fetching beauticians:', error);
//       });
//   }, []); // Empty dependency array to run this effect only once on component mount

//   return (
//     <div className='beauty'>
//       <Navbar />
//       <h1 style={{ marginTop: '30px' }}>Beautician Team</h1>
//       <div className="card-container">
//         {beauticians.map(beautician => (
//           <div className="card" key={beautician.id} style={{ width: '18rem' }}>
//             <img src={beautician.imageUrl} className="card-img-top" alt="..." style={{ padding: '10px', width: '285px', height: '220px' }} />
//             <div className="card-body">
//               <h5 className="card-title">{beautician.name}</h5>
//               {/* Displaying rating stars */}
//               <div>
//                 {[...Array(beautician.rating)].map((_, index) => (
//                   <span key={index} className="fa fa-star checked" style={{ color: 'yellow' }} />
//                 ))}
//               </div>
//               <br /><br />
//               <a href="/Beauty"><button className='btn12'>View Profile</button></a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Beautician;
