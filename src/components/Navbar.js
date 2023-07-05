import ReactLogo from "../Images/react-logo.png"

function Navbar() {
    return(
        <nav className="navbar-Container">
            <div className="navbar">
                <img className="logo" src= {ReactLogo} />
                <h1 className="heading-left">ReactFacts</h1>
            </div>
            <h1 className="heading-right">React-course - project 2</h1>
        </nav>
    )
}
export default Navbar;