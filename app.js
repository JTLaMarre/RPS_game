var r = document.getElementById("r");
var p = document.getElementById("p");
var s = document.getElementById("s");
var Score_display = document.getElementsByClassName("score_display");
var score = document.getElementById("score");
var compscore = document.getElementById("compscore");
var msg = document.getElementById("msg");


var comChoices = ["r", "p", "s"]
function comChoose() {
    var choice = comChoices[Math.floor(Math.random() * 3)];

    return choice;
}

function game(userChoice) {
    var cmp = comChoose();
    switch (userChoice + cmp) {
        case "rs":
        case "pr":
        case "sp":
            msg.innerHTML = "You Win!";
            score.innerHTML = Number(score.innerHTML)+1;
            compscore.innerHTML = Math.max(-1,0);
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
            score.innerHTML = Math.max(-1,0)
            compscore.innerHTML = Number(score.innerHTML)+1;
            break
    }
if (Number(score.innerHTML)===10)
msg.innerHTML = "Made it to Ten you are a champ"
}
if(Number(score.innerHTML)===69){
    msg.innerHTML ="Nice"
}
function main() {
    r.addEventListener('click', function () { game("r") });
    p.addEventListener('click', function () { game("p") });
    s.addEventListener('click', function () { game("s") });
}
main();
