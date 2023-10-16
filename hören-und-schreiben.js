var MAX_NUM = 999;
var number;
var number_audio;
var play_button = document.getElementById("play");
var play_button_spinner = document.querySelector("#play > span.spinner-border");
var field_example = document.querySelector("#field-example");
var inputs = document.querySelector(".inputs");
var feedback = document.getElementById("feedback");

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    check();
  }
});

function go_to_next_input(current_index) {
  if (inputs.children[parseInt(current_index)].firstElementChild.value == "")
    return;
  if (current_index < inputs.children.length - 1)
    inputs.children[parseInt(current_index) + 1].firstElementChild.focus();
  // else check();
}

function generate_new() {
  number = Math.round(Math.random() * MAX_NUM);
  console.log("current number: " + number);

  for (let i = inputs.children.length; i > 0; i--) {
    inputs.children[i - 1].remove();
  }

  for (let i = 0; i < number.toString().length; i++) {
    let input_field = field_example.cloneNode(true);
    input_field.hidden = false;
    input_field.firstElementChild.dataset.index = i;
    inputs.appendChild(input_field);
  }

  inputs.firstElementChild.firstElementChild.focus();

  play_button.disabled = true;
  play_button_spinner.hidden = false;
  tts(number);
}

function check() {
  var guess = "";
  for (let i = 0; i < inputs.children.length; i++) {
    guess += inputs.children[i].firstElementChild.value;
  }

  if (parseInt(guess) == number) {
    generate_new();
    feedback.innerText = "Richtig";
  } else {
    feedback.innerText = "nicht gut";
  }

  // temp solution until better feedback
  setTimeout(() => {
    feedback.innerText = "";
  }, 1000);
}

function tts(text) {
  number_audio = new Audio("https://utils.pintermor9.repl.co/tts?text=" + text);
  number_audio.addEventListener("canplaythrough", () => {
    play_button.disabled = false;
    play_button_spinner.hidden = true;
    number_audio.play();
  });
}

function play() {
  number_audio.play();
}

generate_new();
