import { Delete } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import { CardMain, Content, LayoutMain, TextInfo } from "./Delete.style";

const DeletePage = ()=>{
    return(
        <LayoutMain>
            <CardMain>
                <Content>
                    <TextInfo>Delete Users</TextInfo>
                    <Divider/>
                    <TextInfo>Here where will delete users</TextInfo>
                    <Delete sx={{fontSize:100}}/>
                </Content>
            </CardMain>
        </LayoutMain>
    )
}
export default DeletePage