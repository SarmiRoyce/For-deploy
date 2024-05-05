import './App.css';
import { Route,Routes } from 'react-router-dom';

import Landing from './Components/Landing'
import Login from './Components/Login'
import About from './Pages/About'
import Services from './Pages/Packages'
import Contact from './Pages/Contact Us'
import BR from './Components/Beauty Register'
import UR from './Components/User Register'
import Pro from './Pages/Beauticians'
import Who from './Components/Who'
import Pretty from './Pages/Beautypro'
import OS from './Pages/Ourservices'
import Book from './Pages/Book'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path='/packages' element ={<Services/>}/>
        <Route path='/Contact' element ={<Contact/>}/>
        <Route path='/Register' element ={<BR/>}/>
        <Route path='/URegister' element ={<UR/>}/>
        <Route path='/profile' element ={<Pro/>}/>
        <Route path='/role' element ={<Who/>}/>
        <Route path='/Beauty' element ={<Pretty/>}/>
        <Route path='/Services' element ={<OS/>}/>
        <Route path='/Book' element ={<Book/>}/>

      </Routes>    
    </div>
  );
}

export default App;
