import React from "react";
import Navbar from "./components/layout/NavBar";
import { Switch, Route } from "react-router-dom";
import Agenda from "./components/layout/Agenda";
import Home from "./components/pages/Home";
import ClientDetail from "./components/pages/ClientDetail";
import ContactPage from "./components/pages/ContactPage";
import AddClient from "./components/pages/AddClient";
import ClientEdit from "./components/pages/ClientEdit";
import ErrorPage from "./components/pages/ErrorPage";
import LogIn from "./components/pages/LogIn";
import Register from "./components/pages/Register";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/client/edit" component={ClientEdit} />
        <Route exact path="/client/:cid" component={ClientDetail} />
        <Route exact path="/add-client" component={AddClient} />
        <Route exact path="/about" component={ContactPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
