import { useState } from 'react'
import './App.css'



import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body-app'>
        
          <Header />
     
          <Footer />

    </div>
  )
}

export default App
