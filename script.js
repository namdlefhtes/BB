//https://developers.google.com/sheets/api/reference/rest
//working api call format:
//https://sheets.googleapis.com/v4/spreadsheets/1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY?key=AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74

//https://console.cloud.google.com/home/dashboard?project=bill-bolton
// const table = document.getElementById("teamDisplay");

const container = document.getElementById("container");

const elBuilder = (el, values, appendTo, id) => {
    if (typeof(appendTo)=== "string" ) {
        appendTo = JSON.stringify(appendTo);
        appendTo = JSON.parse(appendTo);
        let appendNode = document.getElementById(appendTo);

        let newEl = document.createElement(el);
        newEl.innerHTML = values;
        newEl.id = id;
        appendNode.appendChild(newEl)
    }
    else {
        let newEl = document.createElement(el);
        newEl.innerHTML = values;
        newEl.id = id;
        appendTo.appendChild(newEl);
    }
    
};

async function checkSheet(team) {

const sheetId = `1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY`;
const googleAPI = `https://sheets.googleapis.com`;
const range = team;
const googleGET = `/v4/spreadsheets/${sheetId}/values/${range}`;
const apiKey= `AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74`;
//https://developers.google.com/sheets/api/guides/concepts
const sheetData = `${googleAPI}${googleGET}?key=${apiKey}`;
const resp = await fetch(sheetData, {mode:`cors`});
let respJSON = await resp.json();
// getting values.

const buildTable = (respJSON, team) => {
    console.log(respJSON.values);

    //builds table title and headings
    elBuilder("table","", container, team)
   
    // element, values, appendto, id
    // creates thead
    elBuilder("thead", "", team, `${team}-tHead`);
    // creates first table row
    elBuilder("tr","", `${team}-tHead`, `${team}-row1`);
    // creates 2 table headings
    elBuilder("th", "",`${team}-row1`, "" );
    elBuilder("th", respJSON.values[0][2],`${team}-row1`, "teamName" );
    

    // elBuilder("th", respJSON.values[0][0], `${team}-row1`, "");
    // elBuilder("th", respJSON.values[0][1], `${team}-row1`, "");
    
    // //respJSON.values[1] and onwards is a player.
    //     //loop 1
        // starts on row 2
        let i=2
        while ( i < respJSON.values.length) {
            // console.log(i);
            elBuilder("tr","", `${team}-tHead`, `${team}-row${i}`);
            let j=0
            while (j < 2) { 
                let row = "row"+i; 
                elBuilder("td", respJSON.values[i][j], `${team}-row${i}`,"");
                j++;
            };
            i++;
        };
};
// loop for all teams
buildTable(respJSON, team);
// team = "";
};
// this runs early. loop to check all teams?
const teamList = ["team1","team2","team3","team4", "team5", "team6"];
// teams appear in random order based on when data retrieved.
//need to wait chronologically.
teamList.forEach(teamName => {
    // setTimeout(() => {
    //     checkSheet(teamName);
    // }, 1000);
    checkSheet(teamName);

});
// checkSheet(teamList[0]);
// checkSheet(teamList[1]);
// checkSheet(teamList[2]);
// checkSheet(teamList[3]);

