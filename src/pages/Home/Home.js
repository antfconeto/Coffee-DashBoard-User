import { CardMedia, Divider } from "@mui/material";
import React from "react";
import { CardMain, Content, LayoutMain, TextInfo } from "./Home.style";
import CoffeeIcon from '@mui/icons-material/Coffee';
const HomePage = ()=>{
    
    return(
       <LayoutMain>
           <CardMain>
               <Content>
                   <TextInfo>Hello!</TextInfo>
                   <Divider/>
                   <TextInfo>You're in HOME PAGE!</TextInfo>
                   <CoffeeIcon sx={{fontSize:100}}/>
               </Content>
           </CardMain>
       </LayoutMain>

    )
} 
export default HomePage