

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
}

console.log("Local timer is running here!")
