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
