import React, { createContext, useEffect, useState } from "react";


export const ItemsContext = createContext({
    isLoaded: false,
    setIsLoaded: () => {},
    items: [],
    setItems: () => {}
});

const ItemsContextProvider = ({ children }) => {
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

    const value = {
        isLoaded,
        items,
    }
    
    return (
        <ItemsContext.Provider value={value}>
            {children}
        </ItemsContext.Provider>
    )
};

export default ItemsContextProvider;