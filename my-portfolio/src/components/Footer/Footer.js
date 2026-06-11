import './Footer.css'
import { ContactFormComponent } from './ContactFormComponent';

export function Footer() {
    const day = new Date();
    const year = day.getFullYear();

    return (
        <div className="footerContainer">
            <footer className="footerContent">
                <p className="footerLeft">Designed and Developed by Flavio Fernandez</p>
                <p className="footerCenter">Copyright <span className="copyrightSymbol">©</span> {year} FF</p>
                <div className="footerRight">
                    <ContactFormComponent />
                </div>
            </footer>
        </div>
    )
}