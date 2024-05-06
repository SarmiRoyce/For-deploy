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