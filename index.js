let scoreHome=0
let displayHome= document.getElementById("scoreHome")

function add1Home() {
    scoreHome+=1
    displayHome.textContent = scoreHome;
}

function add2Home() {
    scoreHome+=2
    displayHome.textContent = scoreHome;
}

function add3Home() {
    scoreHome+=3
    displayHome.textContent = scoreHome;
}

let scoreGuest=0
let displayGuest= document.getElementById("scoreGuest")

function add1Guest() {
    scoreGuest+=1
    displayGuest.textContent = scoreGuest;
}

function add2Guest() {
    scoreGuest+=2
    displayGuest.textContent = scoreGuest;
}

function add3Guest() {
    scoreGuest+=3
    displayGuest.textContent = scoreGuest;
}