// Establecer la fecha y hora del evento
const eventDate = new Date("March 4, 2023 18:30:00 GMT-0300");

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  // Calcular la diferencia de tiempo entre ahora y el evento
  const now = new Date().getTime();
  const timeDiff = eventDate.getTime() - now;

  // Calcular los días, horas, minutos y segundos restantes
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Actualizar el contenido de cada elemento con la cuenta regresiva
  const daysEl = document.getElementById("days_data");
  daysEl.innerText = days;

  const hoursEl = document.getElementById("hours_data");
  hoursEl.innerText = hours;

  const minutesEl = document.getElementById("minutes_data");
  minutesEl.innerText = minutes;

  const secondsEl = document.getElementById("seconds_data");
  secondsEl.innerText = seconds;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);
