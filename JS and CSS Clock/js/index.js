const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hourDegrees = (hour / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);

setDate();
