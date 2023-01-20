import { Avatar, Box, Card, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ items, setItems ] = useState<Items[]>([]);

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
        fontFamily: 'Solitreo'
      }} >

        <Typography variant='h1' color={'white'} sx={{padding: 3, textAlign: 'center'}} >Disney characters</Typography>
        <Box className='container' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:2}} >
         {
          isLoaded
          ?
            items.map((item) => (
                <Card sx={{
                    width: '15em',
                    m: 2,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor: '#3A7DBC',
                    color: 'white',
                    borderRight: 3,
                    borderBottom: 3,
                    borderRadius: 5,
                    borderColor: 'white',
                    '&:hover': {
                    backgroundColor: 'secondary.main',
                    transform: 'scale(1.03)'
                    },
                }} key={item._id}>
                    <Avatar src={item.imageUrl} sx={{
                    width: '8em',
                    height: '8em',
                    border: 'solid 8px white',
                    boxShadow: 10
                    }}/>
                    <Typography variant='h4' sx={{
                    textAlign: 'center',
                    textShadow: 5,
                    fontFamily: 'Solitero, cursive'
                    }}>{item.name}</Typography>
                </Card>
            ))
          :
            <CircularProgress size={300} />
         }
          
        </Box>
      </ Box>
    </div>
  );
}

export default App;
