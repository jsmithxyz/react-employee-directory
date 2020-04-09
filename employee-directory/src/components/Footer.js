import React from 'react';
import "./Footer.css";

const Footer = () => (
    <footer className= "footer">
    <div className="footer-container">
        <span className="footer-span" dangerouslySetInnerHTML={{ "__html": "&copy; jsmithxyz 2020" }}></span>
    </div>
</footer>
);
 
      
           


export default Footer;