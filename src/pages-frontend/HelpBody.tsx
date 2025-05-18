import React from 'react';
import './HelpStyle.css';

async function createContactSheet() {
  await fetch(`/contacts`, {
    method: 'POST',
    body: JSON.stringify({
      name: `${document.getElementById('userName').value}`,
      email: `${document.getElementById('userEmail').value}`,
      message: `${document.getElementById('userMessage').value}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((result) => result.json());

  await loadContactData();
}

async function loadContactData() {
  await fetch(`/contacts`)
    .then((result) => result.json())
    .then((resultJson) => {
      const table = document.createElement('table');
      table.setAttribute('id', 'customerInfo');

      const tableRow = document.createElement('tr');

      const tableHeadingFirstName = document.createElement('th');
      tableHeadingFirstName.innerHTML = 'First Name';
      tableRow.appendChild(tableHeadingFirstName);

      const tableHeadingLastName = document.createElement('th');
      tableHeadingLastName.innerHTML = 'Last Name';
      tableRow.appendChild(tableHeadingLastName);

      const tableHeadingState = document.createElement('th');
      tableHeadingState.innerHTML = 'State';
      tableRow.appendChild(tableHeadingState);

      table.appendChild(tableRow);

      resultJson.forEach((customer) => {
        const customerTableRow = document.createElement('tr');
        const customerTableFirstName = document.createElement('td');
        const customerTableLastName = document.createElement('td');
        const customerTableState = document.createElement('td');

        customerTableFirstName.innerHTML = customer.customer_first_name;
        customerTableLastName.innerHTML = customer.customer_last_name;
        customerTableState.innerHTML = customer.customer_state;

        customerTableRow.appendChild(customerTableFirstName);
        customerTableRow.appendChild(customerTableLastName);
        customerTableRow.appendChild(customerTableState);

        table.appendChild(customerTableRow);
      });

      const preExistingTable = document.getElementById('customerInfo');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadContactData;

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

            <h2>Is WheretoWaste open-source?</h2>
            <p>Yes! You can access the GitHub repository from the link located at the bottom of this page.</p>

        </div>

        <div className = "contact">
            <h1>Got other questions? Contact me!</h1>
            <p>For any questions, comments, or concerns regarding WheretoWaste, please fill out the form below:</p>
            <form id = "contactForm" method = "get">
                <input type = "text" name = "userName" placeholder = "Enter your name..." required />
                <input type = "email" name = "userEmail" placeholder = "Enter your email..." required />
                <textarea name = "userMessage" placeholder = "Enter your message..." ></textarea>
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