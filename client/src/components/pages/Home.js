import React from 'react';
import ClientList from "../ClientList"
import Agenda from "../Agenda"

const Home = () => {
    return (  
        <div className="container">
            <div className="row">
            <div className="col-sm">
            <ClientList/>
            </div>
            <div className="col-md-4"  style={{height:"30"}}>
            <Agenda/>
            </div>
            </div>

        </div>
    );
}
 
export default Home;