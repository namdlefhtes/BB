const container = document.getElementById("bb-container");
const teamList = [];

// API  and sheet info

let sheetId = '';

const apiKey= `AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74`;

// helper function to build elements.
const elBuilder = (el, values, parent, id) => {
    const newEl = document.createElement(el);

    values.length > 0 ? 
        newEl.innerText = values : null;
    id !== "" ? 
        newEl.id = id : newEl.remove();

    typeof(parent) === "string" ? 
        document.getElementById(parent).appendChild(newEl)
        :
        parent.appendChild(newEl);
};

// retrieve team names from sheet.
async function getTeams(sheetId) {
    const teamNames = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${apiKey}`;
    const response = await fetch(teamNames, {mode:`cors`});
    const sheetResp = await response.json();

    sheetResp.sheets.forEach(team => {
        teamList.push(team.properties.title);
    })

    teamList.forEach(team => {
        checkSheet(sheetId, team);
    })
}

// THIS IS WHERE THE SHEET ID IS PASSED IN.
getTeams(sheetId);

async function checkSheet(sheetId, team) {

// https://docs.google.com/spreadsheets/d/1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY/edit#gid=557084764

const sheetData = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${team}?key=${apiKey}`;
const resp = await fetch(sheetData, {mode:`cors`});
const respJSON = await resp.json();
const values = respJSON.values;

// getting values.

const buildTable = (team) => {
    //builds table title and headings
    elBuilder("table", "", container, team);
   
    // creates thead
    elBuilder("thead", "", team, `${team}-tHead`);

    // creates first table row
    elBuilder("tr", "", `${team}-tHead`, `${team}-row1`);
    
    // 
    elBuilder("th", "",`${team}-row1`, "", "");
    // creates blank table heading

    elBuilder("th", values[0][2],`${team}-row1`, `${team}-heading`);
    // add order that sorts chronologically.    
    const teamEl = document.getElementById(team);
    teamEl.style.order = team.slice(-1);

        // starts on row 2
        let i = 2;
        while (i <= values.length) {
            elBuilder("tr", "", `${team}-tHead`, `${team}-row${i}`);
            let j=0

            while (j < 2) { 
                let p = i - 1;
                elBuilder("td", values[p][j], `${team}-row${i}`,"");
                j++;
            };
            i++;
        };
    
        // add class to all number tds
        document.querySelectorAll('TR').forEach((tr) => {
            if (tr.firstChild.tagName === "TD") {
                tr.firstChild.classList.add("player-number");
            }
        }) 
};

buildTable(team);

return team;

};
