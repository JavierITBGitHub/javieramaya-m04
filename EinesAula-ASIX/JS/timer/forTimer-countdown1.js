const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const countdownDisplay = document.getElementById("countdown");
const musicDropdown = document.getElementById("music-dropdown");
const currentTime = document.getElementById("current-time");

let timeLeft;
let timerId;

// Función para mostrar la fecha y hora actual
function updateCurrentTime() {
  const now = new Date();
  currentTime.innerHTML = "Fecha y hora actuales: " + now.toLocaleString();
}
// Actualizar la fecha y hora actual cada segundo
setInterval(updateCurrentTime, 1000);

const updateCountdownDisplay = () => {
  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  countdownDisplay.innerText = `${hours}:${minutes}:${seconds}`;
};

const startCountdown = () => {
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);
  timeLeft = hours * 3600 + minutes * 60 + seconds;
  updateCountdownDisplay();
  timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      const music = new Audio(musicDropdown.value);
      music.play()
      setTimeout(() => {
        music.pause();
      }, 10000);
    }
    updateCountdownDisplay();
  }, 1000);
};

const resetCountdown = () => {
  clearInterval(timerId);
  timeLeft = 0;
  updateCountdownDisplay();
  if (timerId) {
    clearInterval(timerId);
  }
  hoursInput.value = "0";
  minutesInput.value = "0";
  secondsInput.value = "0";
};

startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);