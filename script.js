// time

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("Date");

function showExactDate() {
  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  console.log(formattedDate);

  dateElement.textContent = formattedDate;
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
