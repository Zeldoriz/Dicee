function rollDice() {
    var rollNumberP1 = Math.floor(Math.random() * 6) + 1,
        rollNumberP2 = Math.floor(Math.random() * 6) + 1;

    if (rollNumberP1 == 1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    } else if (rollNumberP1 == 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if (rollNumberP1 == 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } else if (rollNumberP1 == 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if (rollNumberP1 == 5) {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

    if (rollNumberP2 == 1) {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    } else if (rollNumberP2 == 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if (rollNumberP2 == 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } else if (rollNumberP2 == 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if (rollNumberP2 == 5) {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

    if (rollNumberP1 > rollNumberP2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (rollNumberP1 < rollNumberP2) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}

document.body.addEventListener('click', rollDice, true);