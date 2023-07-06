import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [useFavorites, setUseFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUseFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup)
    );
  }

  function removeFavoriteHandler(meetupId) {
    setUseFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function itemIsFavoriteHandler(meetupId) {
    return useFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: useFavorites,
    totalFavorites: useFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
