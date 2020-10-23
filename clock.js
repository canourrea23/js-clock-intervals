let now = new Date();
let minuteCounter = now.getMinutes();
let secondsCounter = now.getSeconds();

const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');


var x = setInterval(function() {
    counter();
    secondRotation(secondsCounter);
    hourRotation(minuteCounter);
    // console.log(`Seconds: ${secondsCounter}`);
    // console.log(`Minute: ${minuteCounter}`);
    
}, 1000);

function counter() {
    secondsCounter++;
    if (secondsCounter % 60 === 0) {
        minuteCounter++;
    } 
}

function secondRotation(seconds) {
    let degRotationSec = seconds * 6;
    let degRotationMin = seconds * 0.05;
    secondHand.style.transform = `rotate(${degRotationSec}deg)`;
    minuteHand.style.transform = `rotate(${degRotationMin}deg)`;
}

function hourRotation(mins) {
    let degRotationHour = mins * .5;
    hourHand.style.transform =  `rotate(${degRotationHour}deg)`;
}


console.log(now.getMinutes());

