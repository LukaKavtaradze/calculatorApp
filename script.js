let previousValue = document.getElementById("prev-value");
let currentValue = document.getElementById("current-Value");
let calcKeyboard = document.getElementById("calc-keyboard");
const reset = document.getElementById("reset");
const deleteValue = document.getElementById("del");



let sqema = ` `;
let operatorButton;
let Num;



reset.addEventListener("click", () => {
  currentValue.textContent = "0";
});

function deleteNum() {
  Num = currentValue.textContent;
 let deletedNum = Num.slice(0, -1)
  currentValue.textContent = deletedNum;
  if(currentValue.textContent === "") {
    currentValue.textContent ="0"
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
    deleteNum()
  }
});
