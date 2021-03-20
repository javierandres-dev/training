/**
 * MODULES
 */
import calculateTwoN from "./010.js";
/**
 * VARIABLES
 */
const d = document,
  $btnMultiply = d.getElementById("btnMultiply"),
  $btnDivide = d.getElementById("btnDivide");
/**
 *  LISTENERS
d.addEventListener("DOMContentLoaded", (e) => {});
 */
const eventListeners = () => {
  $btnMultiply.addEventListener("click", () => calculateTwoN("multiply"));
  $btnDivide.addEventListener("click", () => calculateTwoN("divide"));
};
eventListeners();
