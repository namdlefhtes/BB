const container = document.getElementById("bb-container");
const teamList = ["team1","team2","team3","team4", "team5", "team6"];

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
const sheetData = `${googleAPI}${googleGET}?key=${apiKey}`;
const resp = await fetch(sheetData, {mode:`cors`});
let respJSON = await resp.json();
// getting values.

const buildTable = (respJSON, team) => {
    // console.log(respJSON.values);
  
    //builds table title and headings
    elBuilder("table","", container, team);
   
    // creates thead
    elBuilder("thead", "", team, `${team}-tHead`);
    // creates first table row
    elBuilder("tr","", `${team}-tHead`, `${team}-row1`);
    // creates 2 table headings
    elBuilder("th", "",`${team}-row1`, "", "");
    elBuilder("th", respJSON.values[0][2],`${team}-row1`, "teamName");
    
        // starts on row 2
        let i=2;
        while ( i <= respJSON.values.length) {
            // console.log(i);
            elBuilder("tr","", `${team}-tHead`, `${team}-row${i}`);
            let j=0
            while (j < 2) { 
                let p= i-1;
                elBuilder("td", respJSON.values[p][j], `${team}-row${i}`,"");
                j++;
            };
            i++;
        };
    // add order styling    
    let teamEl = document.getElementById(team);
    teamEl.style.order = team.slice(-1);
};

buildTable(respJSON, team);

return team;
};
// this runs early. loop to check all teams?
const checkPromise = new Promise ((resolve, reject) =>{

    teamList.forEach((teamList) => {
    checkSheet(teamList)
        .then((result) => {
        // console.log(`returned ${result}`);
        resolve(result);
        })
        .catch(error => {
            reject(error);
        });
    })    
});
