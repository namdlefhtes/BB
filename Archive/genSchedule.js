const container = document.getElementById("bb-schedule-container");

const elFactory = (el, values, parent, id) => {
    if (typeof(appendTo)=== "string" ) {
        parent = JSON.stringify(appendTo);
        parent = JSON.parse(appendTo);
        let appendNode = document.getElementById(parent);

        let newEl = document.createElement(el);
        newEl.innerHTML = values;
        newEl.id = id;
        appendNode.appendChild(newEl)
    }
    else {
        let newEl = document.createElement(el);
        newEl.innerHTML = values;
        newEl.id = id;
        parent.appendChild(newEl);
    }  
};


async function checkSheet() {

    const sheetId = `1C4RWVswkWmBAuli2m7Cp8ERKPM6VXgvpdYl_ba5GHJU`;
//  const range = team;
    const apiKey= `AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74`;
    const sheetData = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/?key=${apiKey}`;
    const resp = await fetch(sheetData, {mode:`cors`});
    let respJSON = await resp.json();
    console.log(respJSON);
}
checkSheet();


// https://sheets.googleapis.com/v4/spreadsheets/1C4RWVswkWmBAuli2m7Cp8ERKPM6VXgvpdYl_ba5GHJU/values/?key=AIzaSyBwr2UeuNOcdWJ8qB5HqHA6eE_i6iLTc74