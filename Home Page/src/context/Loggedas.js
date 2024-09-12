import React,{ createContext, useState } from "react";
const Loggedas=createContext();
const LoggedProvider=({children})=>{
    const [login_as,setLogin_as]=useState('');
    return(
    <Loggedas.Provider value={{login_as,setLogin_as}}>
        {children}
    </Loggedas.Provider>
    );
}
export {Loggedas,LoggedProvider};