import './App.css';
import { Route,Routes } from 'react-router-dom';
// import Home from './Components/Landing';
import About from './Pages/About';
import Login from './Components/Login';
import Register from './Components/Beauty Register';
import UserRegister from './Components/User Register';
import Landing from './Components/Landing';
// import Home from './Pages/Home';
import Navbar from '../src/Components/Landing'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/Register' element ={<Register/>}/>


      </Routes>


      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Register/><br/><br/><br/><br/> */}
      <UserRegister/>
      {/* <footer/> */}
    </div>
  );
}

export default App;
