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
    ships: []
};
getDatabase();
function getDatabase() {
    let url = state.host + 'ships';
    fetch(url)
    .then(response => response.json())
    .then(result => {

        state.ships = result;
        render();
    });
}

function render() {
    let rows = '';
    state.ships.forEach( (ships) => {
        rows += `
        <tr>
            <td>${ships.name}</td>
            <td>${ships.length}</td>
            <td>${ships.price}</td>
            <td>${ships.person}</td>
            <td>${ships.trailer}</td>
        </tr>
      `;  
            
    });
    doc.tbody.innerHTML = rows;
}

