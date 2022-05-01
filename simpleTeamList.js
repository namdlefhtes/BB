const container = document.getElementById("bb-container");
const teamList = ["team1","team2","team3","team4", "team5", "team6"];

const elBuilder = (el, values, parent, id) => {
    if (typeof(parent)=== "string" ) {
        parent = JSON.stringify(parent);
        parent = JSON.parse(parent);
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


const buildTable= () = > {


}


