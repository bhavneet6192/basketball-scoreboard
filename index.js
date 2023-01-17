let homeBoard = document.getElementById("home-board")
let homeScore = 0

let guestBoard = document.getElementById("guest-board")
let guestScore = 0

function homeAdd1() {
    homeScore += 1
    homeBoard.textContent = homeScore
}

function homeAdd2() {
    homeScore += 2
    homeBoard.textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
    homeBoard.textContent = homeScore
}

function guestAdd1() {
    guestScore += 1
    guestBoard.textContent = guestScore
}

function guestAdd2() {
    guestScore += 2
    guestBoard.textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
    guestBoard.textContent = guestScore
}

function newGame() {
    homeBoard.textContent = 0
    guestBoard.textContent = 0
    homeScore = 0
    guestScore = 0
}