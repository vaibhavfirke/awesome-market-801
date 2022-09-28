
import "../styles/navbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Navbar() {
  

  return (
  <div className="navbar">
    <div className="content">
    <div className="left">
    <img src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="niftypm" width="100px" heigth="100px"  />

    </div>
    <div className="middle">
    <div className="dropdown">
                    <span className="head1">Resources <span className="arrow"> <KeyboardArrowDownIcon/></span></span>
                    <div class="dropdown-content">
                    <h1>hellow</h1>
                    </div>
                  </div>
    </div>
    <div className="right"></div>
    </div>
  </div>
  )
}
export default Navbar;


