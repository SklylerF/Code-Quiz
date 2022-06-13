var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer")
var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Timer";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}

function sendMessage() {
    timeEl.textContent = " ";
    var textEl = document.createElement("h1");
    textEl.setAttribute("src", "Times up!");
    mainEl.appendChild(textEl);
}
setTime();