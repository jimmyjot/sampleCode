function checkDate(d) {
  console.log("checkDate(d) - begin");
  const dateResult = document.getElementById("isDate");
  if (d instanceof Date) {
    dateResult.value = "Yes";
  } else {
    dateResult.value = "no";
  }
  console.log("checkDate(d) - end");
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
