import React from 'react';
import './HelpStyle.css';
import { useState, useEffect } from 'react';
import supabase from '../server-backend/supabase';


async function createCommentSheet() {
  await fetch(`/contact`, {
    method: 'POST',
    body: JSON.stringify({
      name: `${(document.getElementById('userName') as HTMLInputElement | null)?.value ?? ''}`,
      email: `${(document.getElementById('userEmail') as HTMLInputElement | null)?.value ?? ''}`,
      message: `${(document.getElementById('userMessage') as HTMLTextAreaElement | null)?.value ?? ''}`,
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
      table.setAttribute('id', 'contactInfo');

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

      resultJson.forEach((contact: { contact_name: string; contact_message: string; }) => {
        const customerTableRow = document.createElement('tr');
        const contactTableName = document.createElement('td');
        const contactTableMessage = document.createElement('td');

        contactTableName.innerHTML = contact.contact_name;
        contactTableMessage.innerHTML = contact.contact_message;

        customerTableRow.appendChild(contactTableName);
        customerTableRow.appendChild(contactTableMessage);

        table.appendChild(customerTableRow);
      });

      const preExistingTable = document.getElementById('contactInfo');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadContactData;

const HelpBody: React.FC = () => {
    const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos && todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

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
            <form id="contactForm" method="post" onSubmit={async (e) => {
                e.preventDefault();
                await createCommentSheet();
                }}>
                <label htmlFor="userName">Name:</label>
                <input type="text" id="userName" name="userName" required />
                <label htmlFor="userEmail">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required />
                <label htmlFor="userMessage">Message:</label>
                <textarea id="userMessage" name="userMessage" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        
        <div className = "GitHub">
            <h1>GitHub Repository</h1>
            <p>Click this link to navigate to WheretoWaste's GitHub repository. There, you can find the source code and helpful guides about using WheretoWaste on your own applications.</p>
            <a href = "https://github.com/devwilkes/WheretoWaste"> WheretoWaste Source</a>
        </div>

        <div>
            {todos.map((todo) => (
            <li key={todo}>{todo}</li>
            ))}
        </div>
        </>
    )
    
}

export default HelpBody;