import "../styles/navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import{ Buttons, ButtonL}from "./buttons"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <div className="left">
          <img
            src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg"
            alt="niftypm"
            width="100px"
            heigth="100px"
          />
        </div>
        <div className="middle">
          <div className="dropdown">
            <span className="head1">
              Features
              <p className="arrow">
                {" "}
                <KeyboardArrowDownIcon />
              </p>
            </span>
            <div class="dropdown-content">
              <h1>❤ Learn how Nifty inspires productivity!</h1>
              <div className="parent">
                <div className="child1">
                  <p>Discussions </p> <p>Tasks</p> <p>Time Tracking</p>{" "}
                  <p>Project Home</p>
                </div>
                <div className="child2">
                  <p>Milestones (Gantt Chart) </p>
                  <p>Docs & Files</p>
                  <p> Reporting </p>
                  <p>Project Portfolios</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <span className="head1">
              Use Cases
              <p className="arrow">
                <KeyboardArrowDownIcon />
              </p>
            </span>
            <div class="dropdown-content2">
              <h1>❤ Nifty is very flexible. Here are a few examples of how you can use it.</h1>
              <div className="parent">
                <div className="child1">
                  <p>Agile Development </p> <p>Client Management</p>{" "}
                  <p>Digital Agencies</p>
                </div>
                <div className="child2">
                  <p>Legal Case Management </p>
                  <p>Marketing Teams</p>
                  <p> Product Teams </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <span className="head1">
              Resources
              <p className="arrow">
                {" "}
                <KeyboardArrowDownIcon />
              </p>
            </span>
            <div class="dropdown-content3">
              <div className="parent">
                <div className="child1">
                  <p>Apps</p> <p>Blog</p> <p>Integrations</p>
                </div>
                <div className="child2">
                  <p>Help Center</p>
                  <p>Security</p>
                  <p> Get a Demo </p>
                </div>
              </div>
            </div>
          </div>
          <div className="head1">Got Clients?</div>
          <div className="head1">Pricing</div>
         <Link to="/"> <div className="head1" style={{color:"#00baab"}}> Get Demo </div></Link>
        </div>
        <div className="right">
       
         <Buttons/>
         
          
        </div>
      </div>
    </div>
  );
}
export default Navbar;
