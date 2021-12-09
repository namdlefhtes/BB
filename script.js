//https://developers.google.com/sheets/api/reference/rest
//working api call format:
//https://sheets.googleapis.com/v4/spreadsheets/1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY?key=AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74
//https://console.cloud.google.com/home/dashboard?project=bill-bolton
const table = document.getElementById("teamDisplay");

const elBuilder = (el, values, appendTo, id) => {
    let newEl = document.createElement(el);
    newEl.innerHTML = values;
    newEl.id = id;
    appendTo.appendChild(newEl);
};

async function checkSheet() {

const sheetId = `1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY`;
const googleAPI = `https://sheets.googleapis.com`;
const range = `Team4`;
const googleGET = `/v4/spreadsheets/${sheetId}/values/${range}`;
const apiKey= `AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74`;

//https://developers.google.com/sheets/api/guides/concepts
const sheetData = `${googleAPI}${googleGET}?key=${apiKey}`;
const body = document.getElementsByTagName("body")[0];

const resp = await fetch(sheetData, {mode:`cors`});
let respURL = resp.url;
let respJSON = await resp.json();
// getting values.
console.log(respJSON.values);
console.log(respJSON.values.length);
const buildTable = () => {
    //builds table title and headings
    // element, values, appendto, id
    elBuilder("thead", respJSON.values[0][4], table, "thead");
    elBuilder("tr","", thead, "row1");
    elBuilder("th", respJSON.values[0][0], row1, "head1");
    elBuilder("th", respJSON.values[0][1], row1, "head2");
    
    //respJSON.values[1] and onwards is a player.
        //loop 1
        for (let i=1; i < respJSON.values.length; i++){
            let row = `row${i+1}`;
            // el, txt, append to, rowNum
            elBuilder("tr","", thead, row);
            for (let j=0; j < 2; j++) {
                elBuilder("td", respJSON.values[i][j], row,"");
                console.log(respJSON.values[i][j] +row);
            };
        };
    // each player has a number [0] and name [1]
        //loop2 within loop1 
    // need to increment number starting with 2
        // this can be an +1 version of loop1


    // this definitely needs to be a loop.
    // elBuilder("tr","", thead, "row2");
    // elBuilder("td", respJSON.values[1][0], row2, "");
    // elBuilder("td", respJSON.values[1][1], row2, "");

    // elBuilder("tr","", thead, "row3");
    // elBuilder("td", respJSON.values[2][0], row3, "");
    // elBuilder("td", respJSON.values[2][1], row3, "");

    // elBuilder("tr","", thead, "row4");
    // elBuilder("td", respJSON.values[3][0], row4, "");
    // elBuilder("td", respJSON.values[3][1], row4, "");
}

buildTable(respJSON);

};

checkSheet();

