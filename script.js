//https://developers.google.com/sheets/api/reference/rest
//working api call format:
//https://sheets.googleapis.com/v4/spreadsheets/1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY?key=AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74

//https://console.cloud.google.com/home/dashboard?project=bill-bolton
const table = document.getElementById("teamDisplay");

const elBuilder = (el, values, appendTo, id) => {
    if (typeof(appendTo)=== "string" ) {
        appendTo = JSON.stringify(appendTo);
        appendTo = JSON.parse(appendTo);
        // console.log(appendTo);
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

async function checkSheet() {

const sheetId = `1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY`;
const googleAPI = `https://sheets.googleapis.com`;
const range = `Team4`;
const googleGET = `/v4/spreadsheets/${sheetId}/values/${range}`;
const apiKey= `AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74`;

//https://developers.google.com/sheets/api/guides/concepts
const sheetData = `${googleAPI}${googleGET}?key=${apiKey}`;
const resp = await fetch(sheetData, {mode:`cors`});
let respJSON = await resp.json();
// getting values.
console.log(respJSON.values);

const buildTable = () => {
    //builds table title and headings
    // element, values, appendto, id
    // creates thead
    elBuilder("thead", respJSON.values[0][4], table, "thead");
    // creates first table row
    elBuilder("tr","", thead, "row1");
    // creates 2 table headings
    elBuilder("th", respJSON.values[0][0], row1, "head1");
    elBuilder("th", respJSON.values[0][1], row1, "head2");
    
    // //respJSON.values[1] and onwards is a player.
    //     //loop 1
        // starts on row 2
        let i=2
        while ( i < respJSON.values.length) {
            console.log(i);
            elBuilder("tr","", thead, `row${i}`);

            let j=0
            while (j < 2) { 
                let row = "row"+i; 
                elBuilder("td", respJSON.values[i][j], row,"");
                j++;
            };
            i++;
        };
};

buildTable(respJSON);

};

checkSheet();