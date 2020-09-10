let count = 0;
let stopwatch;
let displayDiv = document.querySelector('.clock');

function displayTime() {
    let hour = Math.floor(count/3600);
    let minute = Math.floor((count/3600)%60);
    let second = Math.floor(count%60);

    let displayHour = (hour<10) ? '0'+hour:hour;
    let displayMinute = (minute<10) ? '0'+minute:minute;
    let displaySecond = (second<10) ? '0' +second:second;

    displayDiv.textContent = displayHour +':' +displayMinute +':' +displaySecond;

    count++;
}

let btn1 = document.querySelector('.start');
let btn2 = document.querySelector('.stop');
let btn3 = document.querySelector('.reset');

btn1.addEventListener('click',function() {
    stopwatch = setInterval(displayTime,1000);
    btn1.disabled = true;
});

btn2.addEventListener('click',function() {
    clearInterval(stopwatch);
    btn2.disabled = false;
});

btn3.addEventListener('click',function() {
    clearInterval(stopwatch);
    btn3.disabled = false;
    count = 0;
    displayTime();//显示刚开始的00:00:00
});

displayTime();