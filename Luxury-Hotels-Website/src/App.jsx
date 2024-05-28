import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Pages/Home';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
