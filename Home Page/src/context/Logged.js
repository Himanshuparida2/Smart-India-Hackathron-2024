import React, { createContext, useState } from "react";

const LoggedInContext = createContext();

const LoggedInProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    
    return (
        <LoggedInContext.Provider value={{ logged, setLogged }}>
            {children}
        </LoggedInContext.Provider>
    );
};

export { LoggedInContext, LoggedInProvider };
