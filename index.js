// JavaScript to display current day and UTC time in hours:minutes:seconds:milliseconds format and update it automatically
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayElement = document.getElementById("currentDay");
const currentUTCTimeElement = document.getElementById("currentUTC");

function updateCurrentTime() {
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getUTCMilliseconds();

    const currentTimeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    currentDayElement.textContent = currentDay;
    currentUTCTimeElement.textContent = currentTimeString;
}

// Call the update function initially
updateCurrentTime();

// Update the time every 100 milliseconds
setInterval(updateCurrentTime, 100);
