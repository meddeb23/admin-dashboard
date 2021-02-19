import React,{useContext} from "react";
import ClientCard from "./ClientCard";
import {ClientContext} from "./context/ClientContext";

const ClientList = () => {
  const list = new Array(10).fill(0);
  const {client} = useContext(ClientContext);

  return (
    <div class="holder mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {client.length ===0  && <div class="text-2xl font-medium text-gray-600 " >there is no  data</div> }
      {!client >0 && client.map((card, i) => {
        return (
            <ClientCard id={i} />
            );
      })}
    </div>
  );
};

export default ClientList;
