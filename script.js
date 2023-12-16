document.addEventListener('DOMContentLoaded', function () {
    const confContainer = document.getElementById('app');
    const beforeBeepAudio = document.getElementById('beforeBeep');
    const endBeepAudio = document.getElementById('endBeep');

    const intervalInput = document.getElementById('intervalTime');
    const breakInput = document.getElementById('breakTime');
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resetButton = document.getElementById('reset');
    const statusHeader = document.getElementById('status');
    const secondsSpan = document.getElementById('sec');

    const currentDate = document.getElementById('current-date');
    const currentTime = document.getElementById('current-time');

    function updateCurrentDateTime() {
        const now = new Date();
        const optionsDate = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

        const formattedDate = now.toLocaleString('en-US', optionsDate);
        const formattedTime = now.toLocaleString('en-US', optionsTime);

        currentDate.textContent = formattedDate;
        currentTime.textContent = formattedTime;
        setTimeout(updateCurrentDateTime, 1000);

        console.log(currentDate.textContent, currentTime.textContent);
        console.log("Local timer is running here!");
    }

    function validateNumericInput(element) {
        const val = element.value;
        if (isNaN(val) || val == 0 || val == '0') {
            element.value = '1';
        }
    }

    function startTimer() {
        rest = false;
        changeToGo();
        interval = setInterval(countdownSeconds, 1000);
    }

    function resetTimer() {
        clearInterval(interval);
        seconds = intervalTime;
        secondsSpan.innerText = seconds;
        rest = true;
        changeToRest();
    }

    function pauseTimer() {
        clearInterval(interval);
    }

    function updateTimerInputs() {
        intervalTime = Math.floor(intervalInput.value * 1);
        breakTime = Math.floor(breakInput.value * 1);
        resetTimer();
    }

    function countdownSeconds() {
        seconds -= 1;
        secondsSpan.innerText = seconds;
        checkForStateChange();
    }

    function checkForStateChange() {
        if (seconds === 0 && !rest) {
            seconds = breakTime + 1;
            rest = true;
            changeToRest();
        } else if (seconds === 0 && rest) {
            seconds = intervalTime + 1;
            rest = false;
            changeToGo();
        }
    }

    function changeToRest() {
        document.body.style.background = 'cyan';
        statusHeader.innerText = 'Rest';
    }

    function changeToGo() {
        document.body.style.background = 'pink';
        statusHeader.innerText = 'Go!';
    }

    intervalInput.addEventListener('keyup', function () {
        validateNumericInput(intervalInput);
    });

    breakInput.addEventListener('keyup', function () {
        validateNumericInput(breakInput);
    });

    startButton.addEventListener('click', function () {
        updateTimerInputs();
        startTimer();
    });

    resetButton.addEventListener('click', function () {
        updateTimerInputs();
        resetTimer();
    });

    pauseButton.addEventListener('click', function () {
        pauseTimer();
    });

    updateCurrentDateTime();
});
