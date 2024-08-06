let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function addOnePointHome() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
}
function addTwoPointHome() {
  homeScore += 2;
  homeScoreEl.innerText = homeScore;
}
function addThreePointHome() {
  homeScore += 3;
  homeScoreEl.innerText = homeScore;
}

function subtractOnePointHome() {
  homeScore -= 1;
  homeScoreEl.innerText = homeScore;
}
function subtractTwoPointHome() {
  homeScore -= 2;
  homeScoreEl.innerText = homeScore;
}
function subtractThreePointHome() {
  homeScore -= 3;
  homeScoreEl.innerText = homeScore;
}

function addOnePointGuest() {
  guestScore += 1;
  guestScoreEl.innerText = guestScore;
}
function addTwoPointGuest() {
  guestScore += 2;
  guestScoreEl.innerText = guestScore;
}
function addThreePointGuest() {
  guestScore += 3;
  guestScoreEl.innerText = guestScore;
}

function subtractOnePointGuest() {
  guestScore -= 1;
  guestScoreEl.innerText = guestScore;
}
function subtractTwoPointGuest() {
  guestScore -= 2;
  guestScoreEl.innerText = guestScore;
}
function subtractThreePointGuest() {
  guestScore -= 3;
  guestScoreEl.innerText = guestScore;
}
