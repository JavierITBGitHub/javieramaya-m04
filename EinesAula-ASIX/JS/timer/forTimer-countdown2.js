// Obtener los elementos del DOM
const datetimeInput = document.getElementById("datetime-input");
const musicDropdown = document.getElementById("music-dropdown");
const countdown = document.getElementById("countdown");
const currentTime = document.getElementById("current-time");
const pauseButton = document.getElementById("pause-button");
const playButton = document.getElementById("play-button");
const restartButton = document.getElementById("restart-button");

// Variables globales
let countdownInterval;
let endTime;
let paused = false;

// Función para mostrar la fecha y hora actual
function updateCurrentTime() {
  const now = new Date();
  currentTime.innerHTML = "Fecha y hora actuales: " + now.toLocaleString();
}

// Función para iniciar la cuenta regresiva
function startCountdown() {
  endTime = new Date(datetimeInput.value).getTime();
  //const music = new Audio(musicDropdown.value);
  const music = new Audio(musicDropdown.value);
  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;
    if (distance <= 0) {
      clearInterval(countdownInterval);
      music.play();
      countdown.innerHTML = '¡Tiempo agotado!'
      pauseButton.disabled = true;
      playButton.disabled = true;
      setTimeout(() => {
        music.pause();
      }, 10000);
    } else {
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdown.innerHTML =`${days}d:${hours}h:${minutes}m:${seconds}s`;
    }
  }, 1000);
  pauseButton.disabled = false;
  playButton.disabled = true;
  paused = false;
}


// Función para pausar la cuenta regresiva
function pauseCountdown() {
  clearInterval(countdownInterval);
  pauseButton.disabled = true;
  playButton.disabled = false;
  paused = true;
}

// Función para reiniciar la cuenta regresiva
function restartCountdown() {
  countdown.innerHTML = '';
  clearInterval(countdownInterval);
  pauseButton.disabled = true;
  playButton.disabled = false;
  paused = false;
}

// Actualizar la fecha y hora actual cada segundo
setInterval(updateCurrentTime, 1000);

// Deshabilitar los botones de pausa y reinicio al principio
pauseButton.disabled = true;
restartButton.disabled = true;

