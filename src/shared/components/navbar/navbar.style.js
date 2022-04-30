import styled from "@emotion/styled";
import { Drawer, Typography, Button, ListItem, List, Box} from "@mui/material";



export const LateralMenu = styled(Drawer)(({theme})=>({
    width:theme.spacing(30),
    justifyContent:"center",
    display: "flex",
    animationDelay:"2s",
    height: "100%",
    flexDirection:"column",
    background: theme.palette.primary.main,
    alignItems:"center",
    [theme.breakpoints.down('md')]:{
        width: theme.spacing(8)
    },
    
    
}))
export const TitleNav = styled(Typography)(({theme})=>({
    width:theme.spacing(28) ,
    fontFamily:'poppins',
    fontSize:theme.spacing(8),
    margin: theme.spacing(4),
    color: theme.palette.secondary.dark,
    textAlign:"center",
    [theme.breakpoints.down('md')]:{
        width: theme.spacing(8),
        fontSize:theme.spacing(5)
    },
}))
export const ButtonTheme = styled(Button)(({theme})=>({
    color:theme.palette.primary.main,
    background: theme.palette.secondary.light,
    "&:hover":{
        background:theme.palette.secondary.main,
        color:"white"
    },
    height:theme.spacing(6),
    borderRadius:theme.spacing(6),
    marginBottom:theme.spacing(1),
    [theme.breakpoints.down('md')]:{
        fontSize:theme.spacing(0),
        width: '40px',
        height: '40px',
        borderRadius:'40px',
    }

    
}))
export const Menu = styled(List)(({theme})=>({

}))
export const ListItemApp = styled(ListItem)(({theme})=>({
    fontFamily:"poppins",
    color:theme.palette.secondary.dark,
    transition: "all",
    animationDelay:"2s",
    "&:hover":{
        background: theme.palette.secondary.light,
        color:theme.palette.secondary.contrastText
    },
    fontSize:theme.spacing(2),
    
}))

export const MenuBar = styled(Box)(({theme})=>({
    width: '100vw',
    height: theme.spacing(10),
    background:theme.palette.background.paper,
    border: 'none',
    alignItems:'center',
    justifyContent:"flex-start",

    [theme.breakpoints.down('md')]:{
        height: theme.spacing(8)
    },
    [theme.breakpoints.up('md')]:{
        justifyContent: "center"
    },
}))

export const ButtonToggle = styled(Button)(({theme})=>({
    color:theme.palette.primary.main,
    background: theme.palette.secondary.light,
    height:"100%",
    borderRadius:'0',
    "&:hover":{
        background:theme.palette.secondary.main,
        color:"white"
    },
}))
