const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");


function setWatchHands() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const mins = now.getMinutes();
    console.log(mins);
    const minsDegree = (mins / 60) * 360 + 90;
    minutesHand.style.transform = `rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    console.log(hours);
    const hoursDegree = (hours / 12) * 360 + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setWatchHands, 1000);