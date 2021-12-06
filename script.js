//https://developers.google.com/sheets/api/reference/rest
//working api call format:
//https://sheets.googleapis.com/v4/spreadsheets/1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY?key=AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74
//https://console.cloud.google.com/home/dashboard?project=bill-bolton

async function checkSheet() {

const sheetId = `1dJ0MP5z_5UG5bFfAKa17ksPRKKy9taVEet7W5-2ZRhY`;
const googleAPI = `https://sheets.googleapis.com`;
const range = `Team 4`;
const googleGET = `/v4/spreadsheets/${sheetId}/values/${range}`;
const apiKey= `AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74`;

//https://developers.google.com/sheets/api/guides/concepts
const sheetData = `${googleAPI}${googleGET}?key=${apiKey}`;
const body = document.getElementsByTagName("body")[0];

const resp = await fetch(sheetData, {mode:`cors`});

// console.log(resp.url);
console.log(resp.url);
// need to run another get on the data bove to access contents.
body.innerHTML = `<a href=${resp.url}>link</a>`;
console.log(respJSON);

};

checkSheet();