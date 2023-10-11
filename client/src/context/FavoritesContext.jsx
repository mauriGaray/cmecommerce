import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (newFavorite) => {
    if (!favorites.includes(newFavorite)) {
      setFavorites([...favorites, newFavorite]);
    }
  };

  const removeFavorite = (favoriteToRemove) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite !== favoriteToRemove
    );
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
