let timer;
// set default timer to 6 mins = 360 seconds
let seconds = 360;
let breakTime = 45; // set break-time for 45 seconds as default
let isBreakTime = false;

function startClock() {
    timer = setInterval(updateClock, 1000);
}

function pauseClock() {
    clearInterval(timer);
}

function clearClock() {
    clearInterval(timer);
    seconds = 360;
    breakTime = 45;
    isBreakTime = false;
    updateClock();
    hideBreakTime();
    updateWorkTimeValue();
}

function updateClock() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (seconds <= 0) {
        clearInterval(timer);
        if (isBreakTime) {
            showBreakTimer(false);
        } else {
            showBreakTimer(true);
            seconds = breakTime; 
            isBreakTime = true;
            startClock(); // Start break time countdown
        }
    } else {
        document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        seconds--;
    }

}

function showBreakTimer(show){
    const breakTimer = document.getElementById('timer-break');
    if(show) {
        breakTimer.style.display = 'block';
    } else {
        breakTimer.style.display = 'none';
    }
}

function hideBreakTime() {
    showBreakTimer(false);
}

// increment timer +
function incrementWorkTime() {
    seconds += 1; // increase by 1 minute
    updateWorkTimeValue(); 
    updateClock();
}


// decrement timer -
function decrementWorkTime() {
    if (seconds > 1) {
    seconds -= 1; // decrease by 1 minute
    updateWorkTimeValue();
    updateClock();
    }
}

function updateWorkTimeValue() {
   document.getElementById('work-time-value').innerText = seconds;
}

function updateBreakTime() {
    const breakTimeInput = document.getElementById('break-time-input');
    breakTime = parseInt(breakTimeInput.value, 10);
}
