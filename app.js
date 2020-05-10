var r = document.getElementById("r");
var p = document.getElementById("p");
var s = document.getElementById("s");
var Score_display = document.getElementsByClassName("score_display");
var score = document.getElementById("score");
var compscore = document.getElementById("compscore");
var msg = document.getElementById("msg");
var userVisual = document.getElementById('userVisual')
var compVisual = document.getElementById('compVisual')
var start = document.getElementById('start')
var time = document.getElementById('time')


var comChoices = ["r", "p", "s"]
function comChoose() {
    var choice = comChoices[Math.floor(Math.random() * 3)];
    switch (choice) {
        case 'r':
            compVisual.src = "https://img.icons8.com/color/48/000000/hand-rock.png"
            compVisual.className = 'Vis'
            break
        case 'p':
            compVisual.src = "https://img.icons8.com/officel/48/000000/hand.png"
            compVisual.className = 'Vis'
            break
        case 's':
            compVisual.src = "https://img.icons8.com/color/48/000000/hand-scissors.png"
            compVisual.className = 'Vis'
            break

    }

    return choice;
}

var finalUser = 0
var finalComp = 0

function game(userChoice) {
    var cmp = comChoose();
    switch (userChoice + cmp) {
        case "rs":
        case "pr":
        case "sp":
            msg.innerHTML = "You Win!";
            score.innerHTML = Number(score.innerHTML) + 1;
            finalUser ++;
            break
        case "rr":
        case "pp":
        case "ss":
            msg.innerHTML = "Tied!";
            break
        case "rp":
        case "ps":
        case "sr":
            msg.innerHTML = "You lose!";
            compscore.innerHTML = Number(score.innerHTML) + 1;
            finalComp++;
            break
    }

}
function main() {
    r.addEventListener('click', function () {
        game("r")
        ChoiceUserDisplay('r')
    });
    p.addEventListener('click', function () {
        game("p")
        ChoiceUserDisplay('p')
    });
    s.addEventListener('click', function () {
        game("s")
        ChoiceUserDisplay('s')
    });
}

// function to show user and  comp scores 
function ChoiceUserDisplay(userChoice) {
    switch (userChoice) {
        case 'r':
            userVisual.src = "https://img.icons8.com/color/48/000000/hand-rock.png"
            userVisual.className = 'Vis'
            break
        case 'p':
            userVisual.src = "https://img.icons8.com/officel/48/000000/hand.png"
            userVisual.className = 'Vis'
            break
        case 's':
            userVisual.src = "https://img.icons8.com/color/48/000000/hand-scissors.png"
            userVisual.className = 'Vis'
            break

    }
}
start.addEventListener('click', function () {
    start.remove();
    var seconds = 300

    var gameInterval = setInterval(function () {
        time.textContent = seconds + " seconds remaining";
        seconds--;

        console.log(seconds)

        if (seconds === 0){
            console.log(seconds)
        time.textContent = "times up"
        gameOver();
        clearInterval(gameInterval)
    }
}, 1000)
})

function gameOver() {
location.href = 'GameOver.html';
}





main();
