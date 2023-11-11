
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() 
{
  function getRandomInt(excuse) 
  {
    return Math.floor(Math.random() * excuse);
  }
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

  document.querySelector("#excuse").innerHTML =
    who[getRandomInt(who.length)] +
    " " +
    what[getRandomInt(what.length)] +
    " " +
    action[getRandomInt(action.length)] +
    " " +
    when[getRandomInt(when.length)];
};
