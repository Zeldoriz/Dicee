var rollingDice1 = false,
    rollingDice2 = false
var rolledDice1 = false,
    rolledDice2 = false
var randNum1 = randNum2 = 0

function rollDice1() {
    if (rollingDice1 == false) {
        var counter = 0
        $(".dice1 p").text("Player 1 Rolled...")
        $("h1").text("Rolling...")
        var stopInterval = setInterval(function () {
            randNum1 = Math.floor(Math.random() * 6) + 1
            $(".img1").attr('src', 'images/dice' + randNum1 + '.png')
            counter++
            rollingDice1 = true
            if (counter == 20) {
                clearInterval(stopInterval)
                $(".dice1 p").text("Player 1 rolled " + randNum1 + " !")
                rollingDice1 = false
                rolledDice1 = true
                checkWin()
            }
        }, 100)
    }
}

$(".dice1 img").on('click', rollDice1);

function rollDice2() {
    if (rollingDice2 == false) {
        var counter = 0
        $(".dice2 p").text("Player 2 Rolled...")
        $("h1").text("Rolling...")
        var stopInterval = setInterval(function () {
            randNum2 = Math.floor(Math.random() * 6) + 1
            $(".img2").attr('src', 'images/dice' + randNum2 + '.png')
            counter++
            rollingDice2 = true
            if (counter == 20) {
                clearInterval(stopInterval)
                $(".dice2 p").text("Player 2 rolled " + randNum2 + " !")
                rollingDice2 = false
                rolledDice2 = true
                checkWin()
            }
        }, 100)
    }
}

$(".dice2 img").on('click', rollDice2);

function checkWin() {
    if (rolledDice1 && rolledDice2) {
        rolledDice1 = rolledDice2 = false
        if (randNum1 > randNum2)
            $('h1').text('Player 1 Wins !')
        else if (randNum2 > randNum1)
            $('h1').text('Player 2 Wins !')
        else
            $('h1').text('Draw !')
    }
}