import { Divider } from "@mui/material";
import React from "react";
import { CardMain, Content, LayoutMain, TextInfo } from "./AllUsers.style";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
const AllUserPage = ()=>{
    return(
        <LayoutMain>
            <CardMain>
                <Content>
                    <TextInfo>All Users</TextInfo>
                    <Divider/>
                    <TextInfo>Here where will stay all users</TextInfo>
                    <SupervisedUserCircleIcon sx={{fontSize:100}}/>
                </Content>
            </CardMain>
        </LayoutMain>
    )
}
export default AllUserPage