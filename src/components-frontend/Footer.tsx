import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className = "footer">
            <h1>Navigate Back to the Top of the Page</h1>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Top</button>
        </div>
    );
 }

 export default Footer;