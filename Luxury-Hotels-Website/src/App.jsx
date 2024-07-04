import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Facilities from './Pages/Facilities';

// import Home from './Pages/Home';


function App() {

  return (
    <Router>
      <div>
        {/* <Home /> */}
        <Facilities />
      </div>
    </Router>
  )
}

export default App
