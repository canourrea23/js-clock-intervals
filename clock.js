let secondsCounter = 0;
const secondHand = document.getElementById('second');

var x = setInterval(function() {
    seconds();
    secondRotation(secondsCounter);
}, 1000);


function seconds() {
    secondsCounter++;
}

function secondRotation(seconds) {
    let degRotation = seconds * 6;
    console.log(degRotation);
    secondHand.style.transform = `rotate(${degRotation}deg)`;
}