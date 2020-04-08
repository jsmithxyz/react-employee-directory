import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className= "footer">
                <div className="footer-container">
                    <span className="footer-span" dangerouslySetInnerHTML={{ "__html": "&copy; jsmithxyz 2020" }}></span>
                </div>
            </footer>
        )
    }

}

export default Footer;