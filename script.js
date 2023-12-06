let timer;
let seconds = 0;

function startClock() {
    timer = setInterval(updateClock, 1000);
}

function pauseClock() {
    clearInterval(timer);
}

function clearClock() {
    clearInterval(timer);
    seconds = 0;
    updateClock();
}

function updateClock() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    seconds++;
}
