// time

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("Date");

function showExactDate() {

    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const nowD = new Date();
    
    const date = nowD.getDate();
    const year = nowD.getFullYear();
    const day = days[nowD.getDay()];
    const month = months[nowD.getMonth()];

    dateElement.textContent = `Today is ${day}, ${month} ${date} ${year}`;
 
}

function updateTime() {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds()
     
    const currentTime = hours + ":" + minutes + ":" + seconds;

    console.log(currentTime)

    timeElement.textContent = currentTime;
}

showExactDate();

// Run immidiately
updateTime();

// Update every second
setInterval(updateTime, 1000);

