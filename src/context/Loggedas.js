import { createContext, useState } from "react";
import Login from "../components/Login";
const Loggedas=new createContext();
const Logas=()=>{
    const [login_as,setLogin_as]=useState('');
    <Loggedas.Provider value={{login_as,setLogin_as}}>
        <Login/>
    </Loggedas.Provider>
}
export {Loggedas,Logas};