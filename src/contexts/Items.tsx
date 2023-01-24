import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

export interface Items {
  films: []
  shortFilms: []
  tvShows: []
  videoGames: []
  parkAttractions: []
  allies: []
  enemies: []
  _id: number
  name: string
  imageUrl: string
  url: string
};

export const ItemsContext = createContext<{
    isLoaded: boolean,
    items: string[] | Items[]
}>({
    isLoaded: false,
    items: []
});

const ItemsContextProvider : FC<PropsWithChildren>= ({ children }) => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch('https://api.disneyapi.dev/characters')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.data)
            },
            (error) => {
              setIsLoaded(false)
            })
      }, [])

    return (
        <ItemsContext.Provider value={{
          items,
          isLoaded
        }}>
            {children}
        </ItemsContext.Provider>
    )
};

export default ItemsContextProvider;