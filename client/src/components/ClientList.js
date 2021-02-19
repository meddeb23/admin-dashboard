import React from "react";
import ClientCard from "./ClientCard";
const ClientList = () => {
  const list = new Array(10).fill(0);
  return (
    <div class="holder mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list.map((card, i) => {
        return (
            <ClientCard id={i} />
            );
      })}
    </div>
  );
};

export default ClientList;
