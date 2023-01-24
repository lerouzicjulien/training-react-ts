import { AppBar, Typography } from "@mui/material";

const Header = ({theme, setTheme }) => {
    
    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="header">
            <Typography variant='h1' sx={{padding: 3, textAlign: 'center'}} >Disney characters</Typography>
            <button
                onClick={() => handleClick() }
            >{theme === 'light' ? 'dark' : 'light'} mode</button>
        </div>
    )
};

export default Header;