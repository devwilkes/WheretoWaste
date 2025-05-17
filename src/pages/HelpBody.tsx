import React from 'react';

const HelpBody: React.FC = () => {
    return (<>
        <div className = "FAQ">
            <h1>FAQ</h1>
            <h2>What kind of trash items are considered "untrashable"?</h2>
            <p>Most municipal trash disposal services advise against the disposal of items such as:</p>
            <ul>
                <li>Electronics</li>
                <li>Hazardous Waste</li>
                <li>Used Medical Equipment</li>
                <li>Paint</li>
                <li>Bulk Items</li>
                <li>etc.</li>
            </ul>
            <h2>How can I use WheretoWaste to make more sustainable disposal decisions?</h2>
            <p>Using suggestions gathered from </p>

        </div>
        <div className = "Contact">
            <h1>Got other questions? Contact me!</h1>
            <p>For any questions, comments, or concerns regarding WheretoWaste, please fill out the form below:</p>
            <form id = "contactForm" method = "get">
                <input type = "text" name = "userName" placeholder = "Enter your name..." required />
                <input type = "email" name = "userEmail" placeholder = "Enter your email..." required />
                <textarea name = "userMessage" placeholder = "Enter your message..." required></textarea>
                <button type = "submit">Submit</button>
            </form>
        </div>
        <div className = "GitHub">
            <h1>GitHub Repository</h1>
            <p>Click this link to navigate to WheretoWaste's GitHub repository. There, you can find the source code and helpful guides about using WheretoWaste on your own applications.</p>
            <a href = "https://github.com/devwilkes/WheretoWaste"> WheretoWaste Source</a>
        </div>
        </>
    )
}

export default HelpBody;