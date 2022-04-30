import { Box, Divider, useMediaQuery, Link } from "@mui/material"
import { ButtonTheme, ButtonToggle, LateralMenu, ListItemApp, Menu, MenuBar, TitleNav } from "./navbar.style"
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppThemeContext } from "../../context/ThemeContext/ThemeContext";
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react";
const Navbar = () => {
    //screenSize
    const screen = useMediaQuery('(min-width:700px)')
    //IconsMenu
    const iconsMenu = [
        <HomeIcon fontSize="small" />,
        <SupervisedUserCircleIcon fontSize="small" />,
        <AddCircleIcon fontSize="small" />,
        <DeleteIcon fontSize="small" />
    ]
    const Links = ["/Home", "/Allusers", "/RegisterNewUser", "/DeleteUser"]
    //Data and management of theme
    const { themeName, toggleTheme } = useAppThemeContext()
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = (open) => (event) => {
        setMenuOpen(open)
    }
    return (
        <Box >
            <LateralMenu open={menuOpen} onClose={toggleMenu(false)} anchor="left" variant={screen ? 'permanent' : 'temporary'}>
                <TitleNav variant="h1">Admin</TitleNav>
                <Box display="flex" flexDirectipon="row">
                    <ButtonTheme onClick={toggleTheme}>
                        {themeName === 'Dark' ? <NightlightRoundIcon /> : <Brightness4Icon />}
                        <p>{themeName}</p>
                    </ButtonTheme>
                </Box>
                <Divider></Divider>
                <Box display="flex" flexDirection="column">
                    <Menu>
                        {["Home", "All Users", "Register new User", "Delete User"].map((text, index) => (
                            <Link href={Links[index]}>
                            <ListItemApp button key={text}>
                                {iconsMenu[index]}
                                {text}
                            </ListItemApp>
                            </Link>
                            
                        ))}
                    </Menu>
                </Box>
            </LateralMenu>
            <MenuBar boxShadow={3} display="flex" flexDirection="row" justifyContent="space-between">
                {screen ? <p></p> :
                    <>
                        <ButtonToggle variant="text" onClick={toggleMenu(true)}>
                            <MenuIcon fontSize="large"></MenuIcon>
                        </ButtonToggle>
                    </>
                }
                <TitleNav>Coffee</TitleNav>
            </MenuBar>
        </Box>



    )
}
export default Navbar