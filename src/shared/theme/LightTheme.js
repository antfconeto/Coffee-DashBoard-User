import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette:{
        primary:{
            main:"#fff",
            light:"#f58c5f",
            dark:"#eee",
            constrastText:"#fff"
        },
        secondary:{
            main:"#bb5000",
            light:"#d6401c",
            dark:"#db3101",
            constrastText:"#000"
        },
        background:{
            paper:"#fff",
            default:"#ffffff"
        }
}
})