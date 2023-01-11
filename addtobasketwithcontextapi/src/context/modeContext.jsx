import React, { createContext, useState } from "react";

export const ModeContext = createContext(null);

const ModeProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [favourites, setFavourites] = useState([]);
  

  const data = {
    users,
    setUsers,
    favourites,
    setFavourites,
  };

  return <ModeContext.Provider value={data}>{children}</ModeContext.Provider>;
};

export default ModeProvider;