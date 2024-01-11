let buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", clearYesNo());

let dateResult = document.getElementById("isDate");

function checkDate(d) {
  console.log("checkDate(d) - begin");
  if (!isNaN(new Date(d))) {
    inputDate.style.color = "green";
  } else {
    inputDate.style.color = "red";
  }
  console.log("checkDate(d) - end");
}

function clearYesNo(dateResult) {
  console.log("clearYesNo - begin");
  dateResult = document.getElementById("isDate");
  dateResult.value = " ";
  document.getElementById("clear").value = buttonClear;
  console.log("clearYesNo - end");
}

/* const buttonName = document.querySelector(".eventName");

function changeColor(color) {
  buttonName.style.color = color;
}

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("addEventListener - begin");
  buttonName.style.color = "blue";
  console.log("addEventListener - end");
});

document.getElementById("dateEntry").addEventListener("click", function (d) {
  console.log("confirm(d) - event listener - begin");
  if (d instanceof Date) {
    isDate = "yes";
  } else {
    isDate = "no";
  }
  console.log("confirm(d) - event listener - end");
});
 */
