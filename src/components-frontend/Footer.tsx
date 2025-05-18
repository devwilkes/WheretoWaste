import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className = "footer">
            <h1>Navigate Back to the Top</h1>
            <button onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
        </div>
    );
 }

 export default Footer;