let previousValue = document.getElementById("prev-value");
let currentValue = document.getElementById("current-Value");
let calcKeyboard = document.getElementById("calc-keyboard");
const reset = document.getElementById("reset");


const deleteValue = document.getElementById("del");



const dashboard = document.getElementById("dashboard");

const calculate = document.getElementById("calculate");

let sqema = ` `;
let operatorButton;
let Num;

const body = document.querySelector("body");
const modes = document.getElementById("bg-mode");
const board = document.getElementById("board");
const numbers = document.querySelectorAll(".number");

const themes = document.querySelectorAll(".theme-col");

modes.addEventListener("input", () => {
  themes.forEach((item) => {
    numbers.forEach((num) => {
      if (modes.value === "1") {
        body.style.background = "#3a4663";
        item.style.color = "white";
        previousValue.style.color = "white";
        currentValue.style.color = "white";
        dashboard.style.background = "#181f33";
        board.style.background = "#242d44";
        deleteValue.style.background = "#647198";
        deleteValue.style.boxShadow = " inset 0 -4px 0 0 #414e73";
        num.style.background = "#eae3dc";
        num.style.color = "#434a59";
        num.style.boxShadow = "  inset 0 -4px 0 0 #b3a497";
        reset.style.background = "#647198";
        reset.style.boxShadow = " inset 0 -4px 0 0 #414e73";
        calculate.style.background = "#d03f2f";
        calculate.style.boxShadow = " inset 0 -4px 0 0 #93261a";
      }
      if (modes.value === "2") {
        body.style.background = "#e6e6e6";
        item.style.color = "#36362c";
        previousValue.style.color = "#36362c";
        currentValue.style.color = "#36362c";
        dashboard.style.background = "#eeeeee";
        board.style.background = "#d2cdcd";
        num.style.background = "#e5e4e1";
        num.style.color = "#36362c";
        num.style.boxShadow = "  inset 0 -4px 0 0 #a79e91";
        deleteValue.style.background = "#378187";
        deleteValue.style.boxShadow = "inset 0 -4px 0 0 #1b6066";
        reset.style.background = "#378187";
        reset.style.boxShadow = " inset 0 -4px 0 0 #1b6066";
        calculate.style.background = "#c85402";
        calculate.style.boxShadow = " inset 0 -4px 0 0 #873901";
      }
      if (modes.value === "3") {
        body.style.background = "#17062a";
        item.style.color = "#ffe53d";
        previousValue.style.color = "#ffe53d";
        currentValue.style.color = "#ffe53d";
        dashboard.style.background = "#1e0936";
        board.style.background = "#1e0936";
        num.style.background = "#331c4d";
        num.style.color = "#ffe53d";
        num.style.boxShadow = " inset 0 -4px 0 0 #be15f4";
        deleteValue.style.background = "#56077c";
        deleteValue.style.boxShadow = "inset 0 -4px 0 0 #be15f4";
        reset.style.background = "#56077c";
        reset.style.boxShadow = " inset 0 -4px 0 0 #be15f4";
        calculate.style.background = "#00ded0";
        calculate.style.boxShadow = " inset 0 -4px 0 0  #6cf9f1";
      }
    });
  });
});

reset.addEventListener("click", () => {
  currentValue.textContent = "0";
});

function deleteNum() {
  Num = currentValue.textContent;
  let deletedNum = Num.slice(0, -1);
  currentValue.textContent = deletedNum;
  if (currentValue.textContent === "") {
    currentValue.textContent = "0";
  }
  console.log(deletedNum);
}

function calculation(calculate) {
  let summary = eval(calculate).toFixed(2);
  currentValue.textContent = summary;
  previousValue.textContent = "0";
  console.log(summary);
}

calcKeyboard.addEventListener("click", (e) => {
  let keyButton = e.target;
  let clickedKey = keyButton.textContent;

  let clickedKeyValue = keyButton.value;

  if (clickedKeyValue === "number") {
    currentValue.textContent += clickedKey;
    // console.log(keyButton.textContent);
  }

  if (clickedKeyValue === "operator") {
    // console.log(keyButton.textContent);
  }

  if (currentValue.textContent[0] === "0" && clickedKeyValue === "number")
    currentValue.textContent = clickedKey;

  if (
    clickedKey === "+" ||
    clickedKey === "-" ||
    clickedKey === "/" ||
    clickedKey === "*"
  ) {
    let prev = currentValue.textContent;
    previousValue.textContent = prev;
    currentValue.textContent = "0";
    operatorButton = clickedKey;

    sqema = `${previousValue.textContent} ${operatorButton}`;
    console.log(sqema);
  }
  if (clickedKey === "=") {
    sqema = `${previousValue.textContent} ${operatorButton} ${currentValue.textContent} `;

    calculation(sqema);
  }
  if (clickedKey === "DEL") {
    deleteNum();
  }
});



