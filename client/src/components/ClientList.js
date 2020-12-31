import React from 'react';
import ClientCard from './ClientCard'
const ClientList = () => {
    const list = new Array(10).fill(0);
    return (
 <div class="row" >
            {list.map((card,i)=>{
                return(<ClientCard />);})}
            </div>
           
            
      );
}
 
export default ClientList;