import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const LayoutMain = styled(Box)(({theme})=>({
    marginLeft:theme.spacing(36),
    display:"flex",
    justifyContent:"center",
    height: "95vh",
    backgroundColor:theme.palette.primary.main,
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
    marginLeft:theme.spacing(24) ,
    },
    "@media (max-width:700px)":{
        marginLeft:0,
    }
}))
export const CardMain = styled(Card)(({theme})=>({
    minWidth:theme.spacing(100),
    height: theme.spacing(50),
    background: theme.palette.primary.dark,
     "@media (max-width:1100px)":{
     minWidth:theme.spacing(75),
     height: theme.spacing(50),
     },
     [theme.breakpoints.down("md")]:{
     minWidth:theme.spacing(46),
     height: theme.spacing(50),
     },
     
    
 }))
 
 export const Content = styled(CardContent)(({theme})=>({
     display: "flex",
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center",
     color: theme.palette.secondary.dark,
 }))
 
 export const TextInfo = styled(Typography)(({theme})=>({
     fontFamily:"poppins",
     fontSize:theme.spacing(5),
     textAlign:"center",
     fontWeight:"bold"
 }))
 