import { AccountCircle } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import { CardMain, Content, LayoutMain, TextInfo } from "./Register.style";

const RegisterPage = ()=>{
    return(
        <LayoutMain>
            <CardMain>
                <Content>
                    <TextInfo>Register</TextInfo>
                    <Divider/>
                    <TextInfo>Here where will register new users</TextInfo>
                    <AccountCircle sx={{fontSize:100}}/>
                </Content>
            </CardMain>
        </LayoutMain>
    )
}
export default RegisterPage