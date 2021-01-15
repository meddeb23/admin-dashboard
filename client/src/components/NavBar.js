import React from 'react';

class NavBar extends React.Component {

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-success">
        
        <a class="navbar-brand" href="/">Home</a>
        <ul class="navbar-nav mr-auto">
      
          <li class="nav-item">
            <a class="nav-link" href="/add-client"  role="button">Client</a>
          </li>
          <li class="nav-item"><a class="nav-link " href="/">Appointements</a></li>
          <li class="nav-item"><a class="nav-link " href="/contact">Contact</a></li>
        </ul>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}
 
export default NavBar;