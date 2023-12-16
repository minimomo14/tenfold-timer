

// Add function to update current date and time
function updateCurrentDateTime() {
    const currentDate =
        document.getElementById('current-date');
    const currentTime =
        document.getElementById('current-time');

    // For the current date and time
    const now = new Date();
    const optionsDate = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

    const formattedDate = now.toLocaleString('en-US', optionsDate);
    const formattedTime = now.toLocaleString('en-US', optionsTime);

    currentDate.textContent = formattedDate;
    currentTime.textContent = formattedTime; setTimeout(updateCurrentDateTime, 1000)

    //check if date and time is working
    //console.log(formattedDate)
    //console.log( "clock ticking",formattedTime)
    console.log(currentDate.textContent, currentTime.textContent)
    console.log("Local timer is running here!")
}




window.onload = function() {

    var seconds = 20;
    var rest = true;
    var interval;
  
    var intervalTime = 20;
    var breakTime = 10;
  
    var settingsButton = document.getElementById("settings");
    var intervalInput = document.getElementById("intervalTime");
    var breakInput = document.getElementById("breakTime");
  
    var startButton = document.getElementById("start");
    var pauseButton = document.getElementById("pause");
    var resetButton = document.getElementById("reset");
  
    var statusHeader = document.getElementById("status");
    var secondsSpan = document.getElementById("sec");
  
    settingsButton.onclick = function() {
      intervalTime = Math.floor(intervalInput.value * 1);
      breakTime = Math.floor(breakInput.value * 1);
      reset();
    }
  
    startButton.onclick = function() {
      rest = false;
      changeToGo();
      interval = setInterval(countdownSeconds, 1000);
    }
  
    resetButton.onclick = function() {
      reset();
    }
  
    function reset() {
      clearInterval(interval);
      seconds = intervalTime;
      secondsSpan.innerText = seconds;
      rest = true;
      changeToRest();
    }
  
    pauseButton.onclick = function() {
      clearInterval(interval);
    }
  
    function countdownSeconds() {
      seconds -= 1;
      secondsSpan.innerText = seconds;
      checkForStateChange();
    }
  
    function checkForStateChange() {
      if (seconds == 0 && rest == false) {
        seconds = breakTime + 1;
        rest = true;
        changeToRest();
      } else if (seconds == 0 && rest == true) {
        seconds = intervalTime + 1;
        rest = false;
        changeToGo();
      }
    }
  
    function changeToRest() {
      $("body").css("background", "cyan");
      statusHeader.innerText = "Rest";
    }
  
    function changeToGo() {
      $("body").css("background", "pink");
      statusHeader.innerText = "Go!";
    }
  
  }