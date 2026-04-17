// time

const timeElement = document.getElementById("time");

function updateTime() {
    timeElement.textContent = Date.now();
}

// Run immidiately
updateTime();

// Update every second
setInterval(updateTime, 1000);
