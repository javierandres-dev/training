/**
 *  MODULES
 */
import hamburgerMenu from "./1-01.js";
import { startClock, stopClock, startAlarm, stopAlarm } from "./1-02.js";
import keyboardEvents from "./1-03.js";
import { countdown } from "./1-04.js";
import scrollTopButton from "./1-05.js";
import changeMode from "./1-06.js";
import checkLocalStorage from "./1-07.js";
import videoAndMap from "./1-08.js";
import responsiveTester from "./1-09.js";
import userDeviceInfo from "./1-10.js";
import connectionDetect from "./1-11.js";
import webcamDetection from "./1-12.js";
import getGeolocation from "./1-13.js";
import searchFilters from "./1-14.js";
import digitalDraw from "./1-15.js";
import slider from "./1-16.js";
import scrollSpy from "./1-17.js";
import smartVideo from "./1-18.js";
import contactFormValidations from "./1-19.js";
import speechReader from "./1-20.js";
/**
 *  VARIABLES
 */
const d = document,
  $btnStartClock = d.getElementById("btnStartClock"),
  $btnStopClock = d.getElementById("btnStopClock"),
  $btnStartAlarm = d.getElementById("btnStartAlarm"),
  $btnStopAlarm = d.getElementById("btnStopAlarm"),
  checkLS = checkLocalStorage();
/**
 *  LISTENERS
 */
// A la carga del DOM
d.addEventListener("DOMContentLoaded", (e) => {
  // CALLS
  hamburgerMenu(".btn-panel", ".panel", ".menu a");
  keyboardEvents("#keRectangle");
  countdown("#boxCountdown");
  scrollTopButton(".btn-scroll-top");
  videoAndMap("boxRandR", "(min-width: 1024px)");
  responsiveTester("formRespTest");
  userDeviceInfo("userDevice");
  webcamDetection();
  getGeolocation("boxGeolocation");
  searchFilters(".card-filter", ".card");
  digitalDraw("boxDigDra");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});
const eventListeners = () => {
  $btnStartClock.addEventListener("click", startClock);
  $btnStopClock.addEventListener("click", stopClock);
  $btnStartAlarm.addEventListener("click", startAlarm);
  $btnStopAlarm.addEventListener("click", stopAlarm);
};
/**
 *  CALLS
 */
eventListeners();
changeMode("#btnMode", checkLS);
connectionDetect();
speechReader();
