let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 1;
let display = document.getElementById("stopwatchDisplay");
let lapTimes = document.getElementById("lapTimes");

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00.000";
    lapTimes.innerHTML = "";
    lapCounter = 1;
}

function recordLap() {
    if (running) {
        let lapTime = display.innerHTML;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapTimes.appendChild(lapItem);
        lapCounter++;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
