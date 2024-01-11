let buttonClear = document.getElementById("id_clearField");
buttonClear.addEventListener("click", clearYesNo());

let dateResult = document.getElementById("isDate");

function clearYesNo(dateResult) {
  console.log("clearYesNo - begin");
  dateResult = document.getElementById("id_isDate");
  dateResult.value = " ";
  document.getElementById("id_clearField").value = buttonClear;
  console.log("clearYesNo - end");
}

function checkDate(d) {
  console.log("checkDate(d) - begin");
  if (!isNaN(new Date(d))) {
    inputDate.style.color = "green";
  } else {
    inputDate.style.color = "red";
  }
  console.log("checkDate(d) - end");
}
