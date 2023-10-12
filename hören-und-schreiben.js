const MAX_NUM = 999;
var number;

function generate_new() {
  number = Math.round(Math.random() * MAX_NUM);
  console.log(number);
}

function check() {
  var guess = document.getElementById("numberInput").value;
  if (guess == number) {
    alert("nice");
    generate_new();
  }
}

generate_new();
