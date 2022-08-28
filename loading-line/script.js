const percentage = document.getElementById("percentage");
const line = document.getElementById("line");
const radios = document.getElementsByName("duration");

let duration = 3; //default = 3
startLoading();

function startAnimation(){
  line.style.animation = `timer ${duration}s linear`;
}

function restartAnimation(){
    line.style.animation = 'none';
    line.offsetWidth;
    line.style.animation = `timer ${duration}s linear`;
}

function startLoading() {
  startAnimation();

  let percentValue = 0;
  let interval = setInterval(increasePercentage, duration*10);

  function increasePercentage() {
    percentValue++;

    if (percentValue > 99) {
      clearInterval(interval);
    }

    percentage.innerText = `${percentValue}%`;
  }
}

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    duration = document.querySelector("[name=duration]:checked").value;
    startLoading();
    restartAnimation();
  });
});
