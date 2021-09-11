const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date (newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
 
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    const days = Math.floor (totalSeconds / 3600 / 24);
    const hours = Math.floor (totalSeconds / 3600) % 24;
    const mins = Math.floor (totalSeconds / 60) % 60;
    const seconds = Math.floor (totalSeconds) % 60 ;
    //console.log(days , hours , mins , seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime (hours);
    minsEl.innerHTML = formatTime (mins);
    secondsEl.innerHTML = formatTime (seconds); 
  
    // turnary condition if the time was less than 10 then show 0 with that.
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }



 }

// initial Call
countdown();

setInterval(countdown, 1000);

// Timing Events
// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.
// The setTimeout() and setInterval() are both methods of the HTML DOM Window object.


// Modulus. The modulus is another name for the remainder after division. For example, 17 mod 5 = 2, since if we divide 17 by 5, we get 3 with remainder 2. ... Mathematically, 13 mod 12 = 1.