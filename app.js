// Set the time when end is near :)
const endIsNear = "1 Jan 2025";

// Global variable  for Element in html5





function countDown(){
    const endIsNearDate = new Date(endIsNear);
    const currentTimeDate = new Date();
 
    // Total Seconds 
    const totalSeconds = (endIsNearDate - currentTimeDate)/1000;


    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600 % 24);
    const minutes = Math.floor(totalSeconds/ 60 % 60);
    const seconds = Math.floor(totalSeconds % 60);

    console.log(days,hours,minutes, seconds);
}




// initial call 
countDown();