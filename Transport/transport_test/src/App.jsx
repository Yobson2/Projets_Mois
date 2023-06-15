import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './square'
import Home from './Home'
import {Routes,Route,Link} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <> 
      {/* <Board /> */}
       
     <Link to="/Home">Mon profit</Link>
      <Routes>
            <Route path='/Home' element={<Home />}></Route>
      </Routes>

    </>
  )
}

export default App
