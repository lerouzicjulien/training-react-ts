import React, { createContext, FC, PropsWithChildren, useState } from "react";

export const ThemeContext = createContext<{
    theme: string,
    setTheme: (newTheme) => void
}>({
    theme: 'dark',
    setTheme: () => {}
})

const ThemeContextProvider : FC<PropsWithChildren> = ({ children }) => {
    const [ theme, setTheme ] = useState('dark');

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeContextProvider;