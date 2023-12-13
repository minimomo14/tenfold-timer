let timer;
let workTime = 10 // set default timer for 10 seconds
let breakTime = 45; // set default break timer in 45 seconds
// let isRunning = false;
let isBreakTime = false;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isBreakTime = false;
    document.getElementById('timer-display').textContent = '00:00';
}

function updateTimer() {
    const display = document.getElementById('timer-display');

    const minutes = Math.floor(workTime / 60);
    const remainingTime = workTime % 60;

    if (workTime <= 0) {
        clearInterval(timer);
            if (isBreakTime) {
                showBreakTime(false);
                workTime = parseInt(document.getElementById('work-time-input').value, 10) || 10; // Reset work time to input value or default
            } else {
                showBreakTime(true);
                workTime = parseInt(document.getElementById('break-time-input').value, 10) || 45; // Reset work time to break time
            }
            isBreakTime = !isBreakTime;
            startTimer(); // Start the timer for the new interval
        } else {
            display.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingTime).padStart(2, '0')}`;
            // Play the sound when the countdown reaches 3 seconds
            if (workTime === 3) {
                playCountdownSound();
            }
            workTime--;
        }
    
        console.log(workTime)
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