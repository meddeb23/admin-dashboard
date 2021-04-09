import React from "react";
import { getClients } from "../api/Client";
export const ClientContext = React.createContext();

const ClientContextProvider = (props) => {
  const [client, setclient] = React.useState([]);

  React.useEffect(() => {
    const data = getClients();
    setclient(data);
    console.log(data);
  }, []);

  return (
    <ClientContext.Provider value={{ client }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientContextProvider;
