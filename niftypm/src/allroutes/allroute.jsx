import Login from "../compontes/login"
import {Routes,Route} from "react-router-dom"
import Home from "../compontes/home"
import Main from "../compontes/main"
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/main" element={<Main/>}></Route>
        </Routes>
    )
}
export default AllRoutes
