import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Registre from './assets/pages/SignIn';
import Dashboard from './assets/pages/Dashboard';
// ----nom du site web: -----
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body-app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<Registre />} />
        <Route path="/DashboardUser/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App
