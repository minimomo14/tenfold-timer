let timer;
// let workTime = 3 // set default timer for 10 seconds
// let breakTime = 5; // set default break timer in 45 seconds
let isBreakTime = false;

function startTimer() {
    pauseTimer();
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    pauseTimer();
    isBreakTime = false;
    console.log("Clear timer", timer);
    document.getElementById('timer-display').textContent = '00:00';
    hideBreakTime();
}


function getWorkTime() {
    let workTimeInput = document.getElementById('work-time-input');
    // add event listener to track changes
    workTimeInput.addEventListener('input', handleInputUpdates);

    return parseInt(workTimeInput.value, 10) || 3;
} 


function getBreakTime() {
    let breakTimeInput = document.getElementById('break-time-input');
    // add event listener to track changes
    breakTimeInput.addEventListener('input', handleInputUpdates);

    return parseInt(breakTimeInput.value, 10) || 5;
} 


function handleInputUpdates() {
    // to reset timer
    resetTimer();

    //to start timer with update value
    startTimer();
}

function updateTimer() {
    const display = document.getElementById('timer-display');
    let currentTimer = isBreakTime ? getBreakTime() : getWorkTime();

    const minutes = Math.floor(currentTimer / 60);
    const remainingTime = currentTimer % 60;

    if (currentTimer <= 0) {
        clearInterval(timer);
        if (isBreakTime) {
            isBreakTime = false;
            hideBreakTime(true);
           startTimer(); // Start the timer for the new interval
        } else {
            isBreakTime = true;
            hideBreakTime(false);
            startTimer();
        }

    } else {
        display.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingTime).padStart(2, '0')}`;
        // Play the sound when the countdown reaches 3 seconds
        if (currentTimer === 3) {
            playCountdownSound();
        }

        // currentTimer--;
        console.log("is current number?",currentTimer)
    }

}


// Set Break-time functions here
function showBreakTime(show) {
    const breakTimeElem = document.getElementById('timer-break');
    if (show) {
        breakTimeElem.style.display = 'block';
    } else {
        breakTimeElem.style.display = 'none';
    }
}

function hideBreakTime() {
    showBreakTime(false);
}

function playCountdownSound() {
    const countdownSound = document.getElementById('countdownSound');

    // Check if the audio is supported and the sound is not already playing
    if (countdownSound && countdownSound.paused) {
        countdownSound.play();
    }
}


// Add function to update current date and time
function updateCurrentDateTime() {
    const currentDate = document.getElementById('current-date');
    const currentTime = document.getElementById('current-time');

    // For the current date and time
    const now = new Date();
    const optionsDate = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

    const formattedDate = now.toLocaleString('en-US', optionsDate);
    const formattedTime = now.toLocaleString('en-US', optionsTime);

    currentDate.textContent = formattedDate;
    currentTime.textContent = formattedTime;

    //check if date and time is working
    console.log(formattedDate)
    console.log(formattedTime)
}

// Update current date and time initially
updateCurrentDateTime();
console.log("current!")
updateTimer();