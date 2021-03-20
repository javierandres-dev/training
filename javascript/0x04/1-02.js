/**
 *  VARIABLES
 */
const d = document;
const $btnStartClock = d.getElementById("btnStartClock");
const $btnStartAlarm = d.getElementById("btnStartAlarm");
const $resultBox = d.getElementById("resultBox");
let clock = undefined;
let alarm = undefined;
/**
 *  FUNCTIONS
 */
function turnOnClock() {
  const time = new Date().toLocaleTimeString();
  //const time = new Date().toTimeString();
  $resultBox.innerHTML = `
  <h4>${time}</h4>
  `;
}
function turnOnAlarm() {
  $resultBox.innerHTML = `
  <audio autoplay loop><source src="./assets/alarm.mp3" type="audio/mpeg"></audio>
  `;
}
export const startClock = () => {
  clock = setInterval(turnOnClock, 1000);
  $resultBox.classList.remove("d-none");
  $btnStartClock.setAttribute("disabled", true);
};
export const stopClock = () => {
  clearInterval(clock);
  $resultBox.classList.add("d-none");
  $resultBox.innerHTML = null;
  $btnStartClock.removeAttribute("disabled");
};
export const startAlarm = () => {
  alarm = setInterval(turnOnAlarm, 1000);
  $btnStartAlarm.setAttribute("disabled", true);
};
export const stopAlarm = () => {
  clearInterval(alarm);
  $resultBox.innerHTML = null;
  $btnStartAlarm.removeAttribute("disabled");
};
