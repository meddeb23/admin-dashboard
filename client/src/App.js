import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  Switch,
  Route,
} from "react-router-dom";
import Agenda from './components/Agenda';
import Home from './components/pages/Home';
import ClientDetail from './components/pages/ClientDetail';
import ContactPage from './components/pages/ContactPage';
import AddClient from './components/AddClient';
import ClientEdit from './components/pages/ClientEdit';
import ErrorPage  from "./components/pages/ErrorPage";
import LogIn from './components/pages/LogIn';
import Register from './components/pages/Register';

function App() {
  return (
<React.Fragment>
  <Navbar/>
  <Route exact path='/' component={Home} />   
   <Route exact path='/agenda' component={Agenda}  />
   <Route exact path={`/client/:cid`} component={ClientDetail} />
   <Route exact path={'/contact'} component={ContactPage} />
   <Route  exact path={'/add-client'} component={AddClient} />
   <Route  exact path={'/client/:cid/edit'}  component={ClientEdit} />
   <Route  exact path={'/login'}  component={LogIn} />
   <Route exact path={'/register'}  component={Register} />
   <Route  component={ErrorPage} />
    <Switch>
    </Switch>
</React.Fragment>        
  );
}

export default App;
