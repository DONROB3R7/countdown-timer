// Set the time when end is near :)
const endIsNear = "1 Jan 2025";

// Global variable  for Element in html5

const globalDays  =  document.getElementById('days');
const globalHours  = document.getElementById('hours');
const globalMinutes = document.getElementById('minutes');
const globalSeconds = document.getElementById('seconds');




function countDown(){
    const endIsNearDate = new Date(endIsNear);
    const currentTimeDate = new Date();
 
    // Total Seconds 
    const totalSeconds = (endIsNearDate - currentTimeDate)/1000;


    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600 % 24);
    const minutes = Math.floor(totalSeconds/ 60 % 60);
    const seconds = Math.floor(totalSeconds % 60);

    globalDays.innerHTML = days;
    globalHours.innerHTML = formatTime(hours);
    globalMinutes.innerHTML = formatTime(minutes);
    globalSeconds.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}




// initial call 
countDown();
setInterval(countDown, 1000);