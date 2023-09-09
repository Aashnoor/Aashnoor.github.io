const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayElement = document.getElementById("currentDay");
const currentUTCTimeElement = document.getElementById("currentUTC");

function updateCurrentTime() {
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const totalMilliseconds = currentDate.getUTCHours() * 3600000 + currentDate.getUTCMinutes() * 60000 + currentDate.getUTCSeconds() * 1000 + currentDate.getUTCMilliseconds();

    currentDayElement.textContent = `Current Day: ${currentDay}`;
    currentUTCTimeElement.textContent = `Current UTC Time (Milliseconds): ${totalMilliseconds}`;
}

// Call the update function initially
updateCurrentTime();

// Update the time every 100 milliseconds
setInterval(updateCurrentTime, 100);

