import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Pages/Home';


function App() {

  return (
    <Router>
      <div>
        
        <Home />
        
      </div>
    </Router>
  )
}

export default App
