import React, { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [log, setLog] = useState(false);
  const logIn = (user) => {
    setData(user);
    setLog(true);
  };

  const logOut = (user) => {
    setLog(false);
  };

  return (
    <userContext.Provider value={{ log, logIn, logOut, data }}>
      {children}
    </userContext.Provider>
  );
};
