import React from 'react';
import ClientList from "../ClientList"
import {  Link} from "react-router-dom";

const Home = () => {
    const appointememnts = new Array(5).fill(0);
    const [isActive, setisActive] = React.useState(new Array(5).fill(false));

   const toggleActive =(i)=>{
    var newArray = [...isActive]
    newArray[i] = !isActive[i];
    setisActive(newArray);   
} 
    return (  
        <div className="container">
            <div className="row">
            <div className="col-sm">
            <ClientList/>
            </div>
            <div className="col-md-4"  style={{height:"30"}}>
            <button type="button" class="btn btn-primary">
             Appointements <span class="badge badge-light">4</span>
              </button>
              <Link  to="/Agenda">
              <button type="button" class="btn btn-info" href='/Agenda' >Agenda</button>
              </Link>
            <div class="row">
  <div class="col-12">
    <div class="list-group" id="list-tab" role="tablist">
     {appointememnts.map((a,i)=>{
         return(
          <a class={`list-group-item list-group-item-action ${isActive[i]?'active':''}`} key={i}
          data-toggle="list" href="/" role="tab" aria-controls="home"
          onMouseOver={()=> toggleActive(i) }
          onMouseOut={()=>toggleActive(i)}
          >A{i}</a>  
     )
     }) }
   
    </div>
  </div>

</div>
            </div>
            </div>

        </div>
    );
}
 
export default Home;