const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayElement = document.getElementById("currentDay");
const currentUTCTimeElement = document.getElementById("currentUTC");

function updateCurrentTime() {
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const totalMilliseconds = currentDate.getTime(); // Get the milliseconds since Jan 1, 1970 (Unix timestamp)

    currentDayElement.textContent = currentDay.toString();
    currentUTCTimeElement.textContent = totalMilliseconds.toString();
}

// Call the update function initially
updateCurrentTime();

// Update the time every 100 milliseconds
setInterval(updateCurrentTime, 100);
