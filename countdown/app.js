const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 7, 11, 13, 59, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${date}, ${year} ${hour}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;

  const msPerDay = 24 * 60 * 60 * 1000;
  const msPerHr = 60 * 60 * 1000;
  const msPerMin = 60 * 1000;

  let days = Math.floor(t / msPerDay);
  let hours = Math.floor((t % msPerDay) / msPerHr);
  let mins = Math.floor((t % msPerHr) / msPerMin);
  let secs = Math.floor((t % msPerMin) / 1000);

  const values = [days, hours, mins, secs];

  const format = (item) => {
    if (item < 10) {
      return item = `0${item}`
    } return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();


