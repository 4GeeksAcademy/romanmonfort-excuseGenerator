/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

//La funcion que genera las escusas,no encontre otra forma que no sea con math.
function generarExcusa() {
  const randomQuien = who[Math.floor(Math.random() * who.length)];
  const randomAccion = action[Math.floor(Math.random() * action.length)];
  const randomQue = what[Math.floor(Math.random() * what.length)];
  const randomCuando = when[Math.floor(Math.random() * when.length)];

  return (
    randomQuien + " " + randomAccion + " " + randomQue + " " + randomCuando
  );
}

window.onload = function() {
  document.getElementById("excusa").innerText = generarExcusa();
};
