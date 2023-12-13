let timer;
let breakTime = 45; // set default break timer in 45 seconds
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        countDown(10, "Work timer completed!", setBreakTime);
    }
}


// Set Break-time functions here
function setBreakTime() {
    countDown(breakTime, "Break-time completed!", () => {
        console.log("Break-time completed");
    });
}

function countDown(initialTime, message, onComplete) {
    let timeInSeconds = initialTime;
    const display = document.getElementById('timer-display');

    timer = setInterval(function() {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingTime = timeInSeconds % 60;

        display.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingTime).padStart(2, '0')}`;

        if (timeInSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            console.log(message);
            if(typeof onComplete === 'function') {
                onComplete();
            } else {
                timeInSeconds--;
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('timer-display').textContent = '00:00';
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

    console.log(formattedDate)
    console.log(formattedTime)
}

// Update current date and time initially
updateCurrentDateTime();
console.log("is here!")