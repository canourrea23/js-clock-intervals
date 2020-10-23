let secondsCounter = 0;
const secondHand = document.getElementById('second');

var x = setInterval(function() {
    seconds();
    console.log(secondsCounter);
    return secondsCounter;
}, 1000);

 


function seconds() {
    secondsCounter++;
}


function secondRotation(seconds) {
    let degRotation = seconds * 6;
    return degRotation;
}