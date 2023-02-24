window.addEventListener('load', calculateTime)
window.addEventListener('load', imgDisplay)
window.addEventListener('load', bodyDisplay)

function calculateTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hour = hour % 24;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;

    setTimeout(calculateTime, 200);
}

var backgroundImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg'
]

var img = document.getElementById("img");
var bode = document.getElementById("bode");

function bodyDisplay(num) {
    var num = Math.floor(Math.random() * 23);
    bode.style.backgroundImage = 'url("' + backgroundImages[num] +'")';
    bode.style.backgroundRepeat = "no-reapeat"; 
}

function imgDisplay(num) {
  var num = Math.floor(Math.random() * 23);
    img.style.backgroundImage = 'url("' + backgroundImages[num] +'")';
    img.style.backgroundRepeat = "no-reapeat";
}