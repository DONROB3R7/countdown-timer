const endIsNear = "1 Jan 2025";

function countDown(){
    const endIsNearDate = new Date(endIsNear);
    const currentTimeDate = new Date();
    console.log(endIsNearDate);
    console.log(currentTimeDate);
}


// initial call 
countDown();