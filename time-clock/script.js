const html = document.querySelector("html");
const body = document.querySelector("body");

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
changeBgColor();

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

  //Display Time & Date
  const hour_24 =  time.getHours()
  timeEl.innerHTML = `${hour_12}:${minute < 10 ? `0${minute}`: minute} ${hour_24 < 12 ? 'AM':'PM'}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`

  //check every hour if background need changes
  if(minute === 0 && second === 0){
    changeBgColor()
  }
}

function changeBgColor(){
  const time = new Date();
  const hour =  time.getHours()

  if(hour === 6){
    //DAWN
    body.style.backgroundImage = `
      radial-gradient(at 80% 4%, #8F6993, transparent 50%),
      radial-gradient(at 45% 25%, #FEA389, transparent 50%),
      radial-gradient(at 25% 60%, #FFF09B, transparent 50%)`
  }else if(hour > 6 && hour < 18){
    //DAYTIME
    body.style.backgroundImage = `
      linear-gradient(#fff,#FFE716)`
  }else if(hour === 18){
    //DUSK
    body.style.backgroundImage = `
      radial-gradient(at 70% 45%, #ef8e44, transparent 50%),
      radial-gradient(at 45% 25%, #FDA811, transparent 50%),
      radial-gradient(at 25% 60%, #FFF09B, transparent 50%)`
  }else{
    //NIGHTTIME
    body.style.backgroundImage = `
      linear-gradient(#01162e, #01426d)`
  }
}

//StackOverflow - Map a range of numbers to another range of numbers
//Map 0 - 11 hours to 0 - 360 degrees
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000)