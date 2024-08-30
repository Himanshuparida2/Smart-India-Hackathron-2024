import React,{ createContext, useState } from "react";

const Loggedin=createContext();
const IsLog=({children})=>{
    const [logged,setLogged]=useState('false');
    return(
    <Loggedin.Provider value={{logged,setLogged}}>
        {children}
    </Loggedin.Provider>
    );
};
export {Loggedin,IsLog};