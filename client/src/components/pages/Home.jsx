import React from "react";
import ClientList from "../ClientList";
import { Link } from "react-router-dom";
import AppointList from "../layout/AppointList";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <ClientList />
        </div>
        <div className="col-md-4" style={{ height: "30" }}>
          <button type="button" class="btn btn-primary">
            Appointements <span class="badge badge-light">4</span>
          </button>
          <Link to="/Agenda">
            <button type="button" class="btn btn-info" href="/Agenda">
              Agenda
            </button>
          </Link>
          <div class="row">
            <div class="col-12">
              <AppointList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
