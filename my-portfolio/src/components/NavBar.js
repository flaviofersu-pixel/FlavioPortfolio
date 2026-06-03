import icon from "./IconNavBar";

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#home"> {icon.home} Home</a></li>
                    <li><a href="#home"> {icon.about} About</a></li>
                    <li><a href="#home"> {icon.project} Projects</a></li>
                    <li><a href="#home"> {icon.resume} Resume</a></li>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar;