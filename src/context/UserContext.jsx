import React, { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({});
  const logIn = (user) => {
    setData(user);
  };

  const logOut = (user) => {
    setData({});
  };

  return (
    <userContext.Provider value={{ logIn, logOut, data }}>
      {children}
    </userContext.Provider>
  );
};
