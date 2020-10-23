let minuteCounter = 0;
let secondsCounter = 59;

const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');

var x = setInterval(function() {
    counter();
    secondRotation(secondsCounter);
    console.log(minuteCounter);
    minuteRotation(minuteCounter);
}, 1000);


function counter() {
    secondsCounter++;
    if (secondsCounter % 60 === 0) {
        minuteCounter++;
    } 
}

function secondRotation(seconds) {
    let degRotation = seconds * 6;
    secondHand.style.transform = `rotate(${degRotation}deg)`;
}

function minuteRotation(minute) {
    let degRotation = minute * 6;
    minuteHand.style.transform = `rotate(${degRotation}deg)`;
}