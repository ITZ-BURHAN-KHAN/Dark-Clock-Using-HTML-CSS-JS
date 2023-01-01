const hourIndicator = document.querySelector(".hour-indicator");
const minuteIndicator = document.querySelector(".minute-indicator");
const secondIndicator = document.querySelector(".second-indicator");
updateClock();
setInterval(updateClock);
function updateClock(){
    var currentTime = new Date();
    var hh = currentTime.getHours();
    var mm = currentTime.getMinutes();
    var ss = currentTime.getSeconds() + currentTime.getMilliseconds()/1000;
    hourIndicator.style.transform = `rotate(${(hh*30)+(mm/12)}deg)`;
    minuteIndicator.style.transform = `rotate(${mm*6}deg)`;
    secondIndicator.style.transform = `rotate(${ss*6}deg)`;
}