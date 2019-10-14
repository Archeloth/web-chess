let isWhiteTurn = true;
let timer = null;
let time = new Date();

$(".pass").click(() => {
    isWhiteTurn = !isWhiteTurn;
    isWhiteTurn ? $("#whos-turn").text("White's turn") : $("#whos-turn").text("Black's turn")
    ResetTimer();
    Timer();
});

$(document).ready(() => {
    $(".draggable").draggable({ snap: "td", snapMode: "inner" });
});

function Timer(){
    timer = setInterval(() => {
        time.setSeconds(time.getSeconds() + 1);
        $("#time").text(time.getMinutes() + ":" + time.getSeconds());
    }, 1000);
}

function ResetTimer(){
    time.setMinutes(0);
    time.setSeconds(0);
    clearInterval(timer);
}