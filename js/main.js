/* let buttonClear = document.getElementById("id_clearField");
buttonClear.addEventListener("click", clearYesNo());

let dateResult = document.getElementById("isDate");

function clearYesNo(dateResult) {
  console.log("clearYesNo - begin");
  dateResult = document.getElementById("id_isDate");
  dateResult.value = " ";
  document.getElementById("id_clearField").value = buttonClear;
  console.log("clearYesNo - end");
}

 */

// Functions to write:
// checkDate()
// clearField()
// setDate()

function checkDate(d) {
  console.log("checkDate(d) - begin");
  if (!isNaN(d)) {
    inputDate.style.color = "green";
    document.getElementById("id_isDate").innerHTML = "Yes";
  } else {
    inputDate.style.color = "red";
    document.getElementById("id_isDate").innerHTML = "No";
  }
  console.log("checkDate(d) - end");
}
