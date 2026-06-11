import { icon } from './Icons';
import './ContactFormComponent.css';
import { useRef } from 'react';

export function ContactFormComponent() {
    const dialog = useRef(null);

    return (
        <div className="contactFormWrapper">
            <dialog ref={dialog}>
                <button className="closeButton" autoFocus onClick={() => dialog.current.close()}>{icon.close}</button>
                <form className="sendForm">
                    <label>Name:
                        <input type="text" placeholder="Your name" /></label>
                    <label>Email:
                        <input type="email" placeholder="Your email" /></label>
                    <label>Message:
                        <textarea placeholder="Your message" /></label>
                    <button type="submit" className="sendButton">Send message</button>
                </form>
            </dialog>
            <button className="contactButton" onClick={() => dialog.current.showModal()} aria-label="Contact me">
                {icon.contact} Contact me
            </button>
        </div>
    )
}