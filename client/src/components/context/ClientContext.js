import React,{useState,createContext, useEffect} from "react"
import {API} from "../Api";

export const ClientContext = createContext()

const ClientContextProvider = (props) => {
    const [client, setclient] = useState([])

    useEffect(() => {
        const data = API.getClients();
        setclient(data)
        console.log(data)
    }, [])
    
    return (  
       <ClientContext.Provider value={{client}} >
           {props.children}
       </ClientContext.Provider>
    );
}
 
export default ClientContextProvider;