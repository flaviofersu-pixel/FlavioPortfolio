export function Footer() {
    const day = new Date();
    const year = day.getFullYear();

    // CSS rules in a JavaScript object
    const footerStyle = {
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
        textAlign: "center",
        borderTop: "1px solid #eaeaea"
    };

    const linkStyle = {
        color: "#61dafb",
        textDecoration: "none"
    };

    return(
        <div style={footerStyle} className="footer">
            <footer>
                <p>Design & Developed by Flavio Fernandez</p>
                <p>&copy; Copyright {year}</p>
                <p><a style={linkStyle} href="mailto:newEmail@gmail.com">newEmail@gmail.com</a></p>
            </footer>
        </div>
    )
}