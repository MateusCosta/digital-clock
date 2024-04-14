var timeEl = document.getElementById("time");

function formatDigitalClock(time) {
  return `<span class="pink">${time.hours
    .toString()
    .padStart(
      2,
      "0"
    )}</span><span class="blue">:</span><span class="orange">${time.minutes
    .toString()
    .padStart(
      2,
      "0"
    )}</span><span class="green">:</span><span class="yellow">${time.seconds
    .toString()
    .padStart(2, "0")}</span>`;
}

function getCurrentTime() {
  var currentDate = new Date();

  var time = {
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds(),
  };

  return formatDigitalClock(time);
}

var time = getCurrentTime();
timeEl.innerHTML = time;

setInterval(function () {
  var time = getCurrentTime();
  timeEl.innerHTML = time;
}, 1000);

function resizeFont() {
  var containerWidth = document.querySelector(".clock").offsetWidth;
  var fontSize = containerWidth * 0.2; // Adjust the multiplier as needed
  document.querySelector("#time").style.fontSize = fontSize + "px";
}

resizeFont();
window.addEventListener("resize", function () {
  resizeFont();
});
