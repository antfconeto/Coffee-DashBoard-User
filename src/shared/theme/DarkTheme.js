import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette:{
        primary:{
            main:"#2d2d2d",
            light:"#fff",
            dark:"#1C1C1C",
            contrastText:"#fff"
        },
        secondary:{
            main:"#1C1C1C",
            light:"#fff",
            dark:"#eeefff", 
            contrastText:"#000"

        },
        background:{
            paper:"#000",
            default:"#000022"
        }
}
})
