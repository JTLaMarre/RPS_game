const r = document.getElementById("r");
const p = document.getElementById("p");
const s = document.getElementById("s");
const Score_display = document.getElementsByClassName("score_display");
const score = document.getElementById("score");
const compscore = document.getElementById("compscore");
const msg = document.getElementById("msg");
const userVisual = document.getElementById('userVisual')
const compVisual = document.getElementById('compVisual')
const start = document.getElementById('start')
const time = document.getElementById('time')


const comChoices = ["r", "p", "s"]
const comChoose =()=> {
    let choice = comChoices[Math.floor(Math.random() * 3)];
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

let finalUser = 0
let finalComp = 0

const game = userChoice => {
    let cmp = comChoose();
    switch (userChoice + cmp) {
        case "rs":
        case "pr":
        case "sp":
            msg.innerHTML = "You Win!";
            finalUser ++;
            score.innerHTML = finalUser;

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
            finalComp++;
            compscore.innerHTML = finalComp
            break
    }

}
const main=()=> {
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
const ChoiceUserDisplay=userChoice=> {
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
    let seconds = 300

    let gameInterval = setInterval(function () {
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
