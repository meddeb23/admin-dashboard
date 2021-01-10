import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Agenda from './components/Agenda';
import Home from './components/pages/Home';
import ClientDetail from './components/pages/ClientDetail';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
<React.Fragment>
  <Navbar/>
  <Router basename={"/"} >  
  <Route exact path='/' component={Home} />   
   <Route path='/agenda' component={Agenda}  />
   <Route path={`/client/:cid`} component={ClientDetail} />
   <Route path={'/contact'} component={ContactPage} />
    <Switch>
    </Switch>
  </Router>
</React.Fragment>        
  );
}

export default App;
