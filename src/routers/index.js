import { Navigate, Route, Routes } from "react-router-dom";
import AllUserPage from "../pages/AllUsers/AllUser";
import DeletePage from "../pages/DeletePage/Delete";
import HomePage from "../pages/Home/Home";
import RegisterPage from "../pages/RegisterPage/Register";


const AppRouter = ()=>{
    return(
        <Routes>
            <Route path="/Home" element={<HomePage/>}></Route>
            <Route path="/Allusers" element={<AllUserPage/>}></Route>
            <Route path="/RegisterNewUser" element={<RegisterPage/>}></Route>
            <Route path="/DeleteUser" element={<DeletePage/>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    )
}
export default  AppRouter