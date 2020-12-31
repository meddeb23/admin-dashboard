import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ClientList  from "./components/ClientList"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Agenda from './components/Agenda';
import Home from './components/pages/Home';

function App() {
  return (
<React.Fragment>
  <Navbar/>
  <Router>
  <Route exact path='/' component={Home} />   
    <Switch>
    </Switch>
  </Router>
</React.Fragment>        
  );
}

export default App;
