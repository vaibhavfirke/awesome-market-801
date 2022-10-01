import Login from "../compontes/login"
import {Routes,Route} from "react-router-dom"
import Home from "../compontes/home"
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}
export default AllRoutes
