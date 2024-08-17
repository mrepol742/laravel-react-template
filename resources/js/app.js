import './bootstrap';

const target = new Date("Jan 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
setInterval(function () {
    var now = new Date().getTime();
    var count = target - now;
    var days = Math.floor(count / (1000 * 60 * 60 * 24));
    var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((count % (1000 * 60)) / 1000);

    let _day = document.getElementById("day");
    _day.innerHTML = "<h3>" + days + "</h3><small>Days</small>";

    let _hour = document.getElementById("hour");
    _hour.innerHTML = "<h3>" + hours + "</h3><small>Hours</small>";

    let _minute = document.getElementById("minute");
    _minute.innerHTML = "<h3>" + minutes + "</h3><small>Minutes</small>";

    let _second = document.getElementById("second");
    _second.innerHTML = "<h3>" + seconds + "</h3><small>Seconds</small>";
}, 1000);