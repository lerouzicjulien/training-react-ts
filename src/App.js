import { Box } from '@mui/material';
import "@fontsource/open-sans"
import { useContext } from 'react';
import './App.scss';
import { ThemeContext } from './contexts/Theme';
import Cards from './components/Cards';
import Header from './components/Header';
import ItemsContextProvider from './contexts/Items';

function App() {

    const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="App">
      <Box sx={
        theme === 'light'
        ? {
            width: '100%',
            height: '100vh',
            background: 'radial-gradient(circle, rgba(246,213,237,1) 0%, rgba(232,159,216,1) 99%);',
            color: 'black'
        }
        : {
            width: '100%',
            minHeight: '100vh',
            background: 'radial-gradient(circle, rgba(55,45,176,1) 0%, rgba(24,22,48,1) 99%)',
            color: 'white'
        }
      } >
        <Header theme={theme} setTheme={setTheme} />
        <ItemsContextProvider>
            <Cards />
        </ItemsContextProvider>
      </ Box>
    </div>
  );
}

export default App;
