import { Avatar, Box, Card, CircularProgress, Typography } from '@mui/material';
import "@fontsource/open-sans"
import { useContext, useEffect, useState } from 'react';
import './App.scss';
import { ThemeContext } from './contexts/Theme';

function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ items, setItems ] = useState<Items[]>([]);
  const { theme, setTheme } = useContext<Theme>(ThemeContext)
  interface Items {
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

  interface Theme {
    theme: string,
    setTheme: (theme: string) => {}
  }

  useEffect(() => {
    fetch('https://api.disneyapi.dev/characters')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data)
          console.log(result)
        },
        (error) => {
          setIsLoaded(false)
        })
  }, [])

  useEffect(() => {      
    console.log(items)
  }, [items])

  return (
    <div className="App">
      <Box sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(55,45,176,1) 0%, rgba(24,22,48,1) 99%)',
      }} >

        <Typography variant='h1' color={'white'} sx={{padding: 3, textAlign: 'center'}} >Disney characters</Typography>
        <button onClick={setTheme(!theme)}>`${!theme} mode`</button>
        <Cards />
      </ Box>
    </div>
  );
}

export default App;
