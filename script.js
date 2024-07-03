let currentTime = document.querySelector('#currentTime');
let currentDay = document.querySelector('#currentDay');

const currentDate = new Date();
const hour = currentDate.getUTCHours();
const minutes = currentDate.getUTCMinutes();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'hursday', 'Friday']

//display the current time and day of the week
currentTime.textContent = `${hour}:${minutes}`;
currentDay.textContent = `${days[currentDate.getUTCDay()]}`;