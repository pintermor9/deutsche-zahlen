const MAX_NUM = 999;
var number;
var number_audio;
var play_button = document.getElementById("play");
var input = document.getElementById("numberInput");
var feedback = document.getElementById("feedback");

function generate_new() {
  number = Math.round(Math.random() * MAX_NUM);
  console.log(number);

  play_button.disabled = true;
  tts(number);
}

function check() {
  var guess = parseInt(input.value);
  if (guess == number) {
    input.value = "";
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
  number_audio.addEventListener("loadeddata", () => {
    play_button.disabled = false;
  });
}

function play() {
  number_audio.play();
}

generate_new();
