let timer;
let setTimer = 10 // set default timer for 10 seconds
let breakTime = 45; // set default break timer in 45 seconds
// let isRunning = false;
let isBreakTime = false;

function startTimer() {
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

        const minutes = Math.floor(setTimer / 60);
        const remainingTime = setTimer % 60;

        if (setTimer <= 0) {
            clearInterval(timer);
            if(isBreakTime) {
                showBreakTime(false);
            } else {
                showBreakTime(true);
                setTimer = breakTime;
                isBreakTime = true;
                startTimer();
            } 
        } else {
            display.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingTime).padStart(2, '0')}`;
            setTimer--;
        }
        console.log("is here")
    }
    


// Set Break-time functions here
function showBreakTime(show) {
   const breakTimeElem = document.getElementById('timer-break');
   if(show) {
    breakTimeElem.style.display = 'block';
   } else {
    breakTimeElem.style.display = 'none';
   }
}

function hideBreakTime() {
    showBreakTime(false);
}



// Add function to update current date and time
function updateCurrentDateTime() {
    const currentDate = document.getElementById('current-date');
    const currentTime = document.getElementById('current-time');

    // For the current date and time
    const now = new Date();
    const optionsDate = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
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
console.log("current time!")