// time

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");



function updateTime() {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds()
     
    const currentTime = hours + ":" + minutes + ":" + seconds;

    console.log(currentTime)

    timeElement.textContent = currentTime;

    // date
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    
    
    const date = now.getDate();
    const year = now.getFullYear();
    const day = days[now.getDay()];
    const month = months[now.getMonth()];

    const todaysDate = day + month + year;

    dateElement.textContent = todaysDate;
}



// Run immidiately
updateTime();

// Update every second
setInterval(updateTime, 1000);

