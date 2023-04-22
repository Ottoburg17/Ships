/*
* File: app.js
* Author: Németh Ottó
* Copyright: 2023, Németh Ottó
* Group: Szoft I-2 E
* Date: 2023-04-22
* Github: https://github.com/ottoburg17/
* Licenc: GNU GPL
*/

const doc = {
    tbody: document.querySelector('#tbody')
};

const state = {
    host: 'http://localhost:8000/',
    database: []
};
getDatabase();
function getDatabase() {
    let url = state.host + 'database';
    fetch(url)
    .then(response => response.json())
    .then(result => {

        state.database = result;
        render();
    });
}

function render() {
    let rows = '';
    state.database.forEach( (database) => {
        rows += `
        <tr>
            <td>${database.name}</td>
            <td>${database.size}</td>
            <td>${database.price}</td>
            <td>${database.numberofpersons}</td>
            <td>${database.trailer}</td>
        </tr>
    `;        
    });
    doc.tbody.innerHTML = rows;
}

