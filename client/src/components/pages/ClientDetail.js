import React from 'react';
import {useParams,useRouteMatch} from "react-router-dom"
import {motion } from "framer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function ClientDetail (client){
  let { path, url } = useRouteMatch();
  console.log({path,url})
    let {cid} = useParams();
    const [isActive, setisActive] = React.useState([true,false,false]);
    return ( 

<React.Fragment>
            Client detail {cid}

            <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
        <a class={`nav-link  ${isActive[0]?'active':''} `} 
         onClick={()=>setisActive([true,false,false])} >data 1</a>
      </li>
      <li class="nav-item">
        <a class={`nav-link ${isActive[1]?'active':''}`} 
       onClick={()=>setisActive([false,true,false])} >data2</a>
      </li>
      <li class="nav-item">
        <a class={`nav-link ${isActive[2]?'active':''}`} 
         onClick={()=>setisActive([false,false,true])}  >data 3</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
{
 isActive[0] && <motion.div  className="base container" 
 variants={nextVariants}
 initial="hidden"
 animate="visible"
 exit="exit" >
<h5 class="card-title">data 1</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</motion.div>
}       

{
isActive[1] &&
<motion.div   className="toppings container"
    variants={nextVariants}
    initial="hidden"
    animate="visible" 
    exit="exit" >

<h5 class="card-title">data 2</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</motion.div>

}

{
isActive[2] &&<motion.div   className="toppings container"
variants={nextVariants}
initial="hidden"
animate="visible" 
exit="exit" >
<h5 class="card-title">data 3</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>  
</motion.div>
}

  </div>
</div>

        </React.Fragment>
     );
}
 
export default ClientDetail;

const containerVariance={
  hidden:{
    opacity:0
  },visible:{
    opacity:1,
    transition:{delay:1,duration:1 }
  },
  exit:{ x:'-100vw',transition:{ease:"easeInOut"}  }

}

const nextVariants={
  hidden:{
    x: '-100vw' 
  },
  visible:{
    x:0,
    transition:{
      type:"spring",
      stiffness:120
    }
  }
}





