import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ItemsContext } from "../contexts/Items";
import SingleCard from "./SingleCard";

const Cards = () => {

  const { items, isLoaded } = useContext(ItemsContext)

    return (
        <Box className='container' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:2}} >
        {
         isLoaded
         ?
           items.map((item) => (
            <SingleCard item={item} key={item._id} />
           ))
         :
           <CircularProgress size={300} />
        }
         
       </Box>
    )
};

export default Cards;