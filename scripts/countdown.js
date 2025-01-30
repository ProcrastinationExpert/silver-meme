// Counting Down
function fixnumber(num) {
  return num < 10 ? `0${num}` : num;
}
var countingDownDate = new Date("Jan 31 2025 23:59:59").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countingDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = fixnumber(days);
  hours = fixnumber(hours);
  minutes = fixnumber(minutes);
  seconds = fixnumber(seconds);

  document.getElementById(
    "countdown-time"
  ).innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-time").innerHTML = "Ended";
  }
});
