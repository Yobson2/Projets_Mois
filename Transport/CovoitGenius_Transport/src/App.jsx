import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Trajet from './pages/Trajet';
import Home from './pages/Home';
import Dashboard from './pages/userPages/UserSection';
import Registre from './pages/Registre';
import Login from './pages/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body-app'>
       {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trajet" element={<Trajet />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/DashboardUser/id:" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
