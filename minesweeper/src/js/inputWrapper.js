import { variables } from "./variables.js";
import { savelocalUser } from "./config.js";
export function inputWrapper() {
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("maim__body_input-wrapper");
  inputWrapper.innerText = "Your name: ";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", variables.userName);
  input.addEventListener("focus", () => _focus(input), true);
  input.addEventListener("blur", () => _blur(input), true);
  inputWrapper.appendChild(input);
  return inputWrapper;
}

function _focus(input) {
  input.classList.add("focused");
}
function _blur(input) {
  input.classList.remove("focused");
  variables.userName = input.value;
  savelocalUser();
}
