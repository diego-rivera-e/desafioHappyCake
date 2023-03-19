import NavbarTop from "./components/Navbar"
import React from 'react'
import './App.css'
import Contacto from './views/Contacto';
import Home from './views/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/desafiohappycake/" element={<Home />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
