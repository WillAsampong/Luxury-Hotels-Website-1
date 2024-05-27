import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
