import { Avatar, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

const SingleCard = ({ item }) => {

    const { theme } = useContext(ThemeContext);
    const backgroundColor = theme === 'light' ? 'secondary.main' : '#3A7DBC';
    const hoverBackgroundColor = theme === 'light' ? '#3A7DBC' : 'secondary.main';

    return (
        <Card sx={{
            width: '15em',
            m: 2,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            color: 'white',
            borderRight: 3,
            borderBottom: 3,
            borderRadius: 5,
            borderColor: 'white',
            backgroundColor: backgroundColor,
            '&:hover': {
            backgroundColor: hoverBackgroundColor,
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
    )
}

export default SingleCard;