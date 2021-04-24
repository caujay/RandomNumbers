const player = players.players;
let randomowaLiczba;
let lastRandom = 0;
let playerCounter = 0;
let queuePlayers = [];

//colors

const lightGrey = "#8a7575";
const green = "rgb(0, 102, 34)";

const tablePlayers = document.getElementById("listPlayers");
const counterPlayer = document.querySelector(".counter");

const Btn3v3 = document.getElementById("3Btn");
const Btn4v4 = document.getElementById("4Btn");
const Btn5v5 = document.getElementById("5Btn");

counterPlayer.innerHTML = playerCounter;

const lastRolled = (numberOfPlayers) => {
  return numberOfPlayers / 2;
};

const printPlayers = () => {
  const table = document.getElementById("listPlayers");
  for (let i = 0; i < player.length; i++) {
    table
      .insertRow(i)
      .insertCell(0).innerHTML = `${player[i].name} (${player[i].nickname})`;
  }
};

const counterPlayers = (add) => {
  if (add === true) {
    playerCounter--;
    counterPlayer.innerHTML = playerCounter;
  } else {
    playerCounter++;
    counterPlayer.innerHTML = playerCounter;
  }
};

tablePlayers.onclick = function (event) {
  let target = event.target;
  while (target != this) {
    if (target.tagName == "TD") {
      if (target.style.backgroundColor == green) {
        target.style.backgroundColor = lightGrey;
        counterPlayers(true);
        for (let i = 0; i < queuePlayers.length; i++) {
          if (queuePlayers[i] === target.innerHTML) {
            queuePlayers.splice(i, 1);
          }
        }
        return;
      }
      counterPlayers(false);
      target.style.backgroundColor = green;
      queuePlayers.push(target.innerHTML);
      return;
    }
    target = target.parentNode;
  }
};

const clearTable = (lastRandom) => {
  const table = document.getElementById("listTeams");
  for (let i = 0; i < lastRandom + 1; i++) {
    table.deleteRow(0);
  }
};

const randomNumbers = (numberOfPlayers) => {
  let randomOfPlayers = [];
  let i = 0;
  do {
    let randomNumber = Math.floor(Math.random() * numberOfPlayers);
    if (!randomOfPlayers.includes(randomNumber)) {
      randomOfPlayers.push(randomNumber);
      i++;
    }
  } while (i < numberOfPlayers);
  return randomOfPlayers;
};

const printSides = () => {
  const table = document.getElementById("listTeams");
  const row = table.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = "Blue side";
  cell2.innerHTML = "RedSide";
};

const printTeams = (numberOfPlayers) => {
  const table = document.getElementById("listTeams");
  for (let i = 1; i < numberOfPlayers / 2 + 1; i++) {
    const row = table.insertRow(i);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = queuePlayers[randomowaLiczba[i - 1]];
    cell2.innerHTML =
      queuePlayers[randomowaLiczba[i - 1 + numberOfPlayers / 2]];
  }
};

Btn3v3.addEventListener("click", function () {
  if (lastRandom !== 0) {
    clearTable(lastRandom);
  }
  const team = 6;
  lastRandom = lastRolled(team);
  randomowaLiczba = randomNumbers(team);
  if (team === queuePlayers.length) {
    printSides();
    printTeams(team);
  } else {
    console.log("zla ilosc graczy");
    lastRandom = 0;
  }
});

Btn4v4.addEventListener("click", function () {
  if (lastRandom !== 0) {
    clearTable(lastRandom);
  }
  const team = 8;
  lastRandom = lastRolled(team);
  randomowaLiczba = randomNumbers(team);
  if (team === queuePlayers.length) {
    printSides();
    printTeams(team);
  } else {
    console.log("zla ilosc graczy");
    lastRandom = 0;
  }
});

Btn5v5.addEventListener("click", function () {
  if (lastRandom !== 0) {
    clearTable(lastRandom);
  }
  const team = 10;
  lastRandom = lastRolled(team);
  randomowaLiczba = randomNumbers(team);
  if (team === queuePlayers.length) {
    printSides();
    printTeams(team);
  } else {
    console.log("zla ilosc graczy");
    lastRandom = 0;
  }
});
