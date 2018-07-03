

function toggleOpen(bet) {
    'use strict';
    
    bet.classList.toggle("open");
}

function minChat() {
    'use strict';
    
    document.getElementById("chat").style.display = "none";
    document.getElementById("main").style = `grid-template-areas: "logo navigation user-info" "history powerball powerball"`;
    document.getElementById("chat-max-button").style.display = "block";
}

function maxChat() {
    'use strict';
    
    document.getElementById("chat").style.display = "";
    document.getElementById("main").style = `grid-template-areas: "logo navigation user-info" "history powerball chat"`;
    document.getElementById("chat-max-button").style.display = "none";
}

function chatBottom() {
    'use strict';
    
    let chat = document.querySelector("#chat-container .simplebar-scroll-content")
    chat.scrollTop = chat.scrollHeight;
}

function exampleChart() {
    var c = document.getElementById("game-canvas");
    var ctx = c.getContext("2d");
    var r = 300 / 2;
    ctx.lineWidth = 50;
    var x = y = r + 38;

    ctx.beginPath();
    ctx.arc(x, y, r, 0 * Math.PI, 2 * Math.PI);
    ctx.strokeStyle = "#2f2f3b";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, r, 1.5 * Math.PI, 1.95 * Math.PI);
    ctx.strokeStyle = "#7f86df";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, r, 1.95 * Math.PI, 0.35 * Math.PI);
    ctx.strokeStyle = "#b646f1";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, r, 0.35 * Math.PI, 0.75 * Math.PI);
    ctx.strokeStyle = "#02e2fd";
    ctx.stroke();
}

window.onload = function () {
    'use strict';
    
    let bets = document.getElementsByClassName("bet");
    
    for (let i=0; i<bets.length; ++i)
        bets[i].addEventListener("click", function () {
            toggleOpen(bets[i]);
        }, false);
    
    document.getElementById("chat-min-button").addEventListener("click", minChat);
    document.getElementById("chat-max-button").addEventListener("click", maxChat);
    
    exampleChart();
    chatBottom();
};