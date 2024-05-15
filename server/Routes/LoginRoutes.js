// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // import jwtDecode from 'jwt-decode';

// // function App() {
// //     const [user, setUser] = useState(null);

// //     const login = async (username, password) => {
// //         const response = await fetch('/login', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify({ username, password })
// //         });
// //         if (response.ok) {
// //             const { token } = await response.json();
// //             const decoded = jwtDecode(token);
// //             setUser({ ...decoded });
// //         } else {
// //             alert('Login failed!');
// //         }
// //     };

// //     return (
// //         <Router>
// //             <Route path="/" exact>
// //                 {user ? (user.role === 'Admin' ? <Redirect to="/Admin" /> : <Redirect to="/" />) : <LoginForm onLogin={login} />}
// //             </Route>
// //             <Route path="/" component={HomePage} />
// //             <Route path="/Admin" component={AdminPage} />
// //         </Router>
// //     );
// // }






const express = require("express");
const router = express.Router();
const logInControl = require("../Controllers/LoginController");
router.post("/login", logInControl.LoginUser);
module.exports = router;