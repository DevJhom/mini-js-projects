const html = document.querySelector("html");

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setTime();

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour_12 = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  //Rotate Clock's needles
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour_12, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

  //Display Time 
  const hour_24 =  time.getHours()
  timeEl.innerHTML = `${hour_24}:${minute < 10 ? `0${minute}`: minute} ${hour_24 < 12 ? 'AM':'PM'}`

  //Display Date
  dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`
}

//StackOverflow - Map a range of numbers to another range of numbers
//Map 0 - 11 hours to 0 - 360 degrees
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000)