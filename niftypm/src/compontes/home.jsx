import Navbar from "./navbar"
import Footer from "./footer"
import GetDemo from "./getdemo/getdemo"
import Roadmap from "./getdemo/rodemapone"
import Login from "./login"
import GetStarted from "./getdemo/getstarted"
import Animation from "./getdemo/Animation"
function Home(){
    return (
        <div>
             <Navbar></Navbar>
{/* <Animation></Animation> */}
            <GetDemo/> 
            {/* <Login/> */}
            {/* <Roadmap/> */}
            {/* <GetStarted /> */}
        </div>
    )
}
export default  Home