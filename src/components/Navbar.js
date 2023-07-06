import ReactLogo from "../Images/react-logo.png"

function Navbar() {
    return(
        <nav className="navbar-Container">
            <img className="logo" src= {ReactLogo}  alt="logo of React"/>
            <h1 className="heading-left">ReactFacts</h1>    
            <h1 className="heading-right">React-course - project 2</h1>
        </nav>
    )
}
export default Navbar;