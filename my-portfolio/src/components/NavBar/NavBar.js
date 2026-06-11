import { icon } from "./Icons";
import './NavBar.css';

export function NavBar() {
    return (
        <div>
            <nav className="navBar">
                <a className="navLogo" href="#home">Ff.</a>
                <ul>
                    <li><a className="navLink" href="#home"> {icon.home} Home</a></li>
                    <li><a className="navLink" href="#home"> {icon.about} About</a></li>
                    <li><a className="navLink" href="#home"> {icon.project} Projects</a></li>
                    <li><a className="navLink" href="#home"> {icon.resume} Resume</a></li>

                </ul>
            </nav>
        </div>
    )
}