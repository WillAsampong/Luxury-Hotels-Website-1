import './App.css'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './Pages/ContactUS'
import Rooms from './Pages/Rooms';
import Facilities from './Pages/Facilities';
import Home from './Pages/Home';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      
    </>
  )
}

export default App
