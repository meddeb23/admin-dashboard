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
import AddClient from './components/AddClient';
import ClientEdit from './components/pages/ClientEdit';

function App() {
  return (
<React.Fragment>
  <Navbar/>
  <Router basename={"/"} >  
  <Route exact path='/' component={Home} />   
   <Route path='/agenda' component={Agenda}  />
   <Route exact path={`/client/:cid`} component={ClientDetail} />
   <Route path={'/contact'} component={ContactPage} />
   <Route path={'/add-client'} component={AddClient} />
   <Route  path={'/client/:cid/edit'}  component={ClientEdit} />
    <Switch>
    </Switch>
  </Router>
</React.Fragment>        
  );
}

export default App;
