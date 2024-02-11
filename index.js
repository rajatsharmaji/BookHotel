const adultMinus = document.getElementById("adult-minus");
const adultPlus = document.getElementById("adult-plus");
const adultValue = document.getElementById("adult-value");
const childMinus = document.getElementById("child-minus");
const childPlus = document.getElementById("child-plus");
const childValue = document.getElementById("child-value");
const totalValue = document.getElementById("total-value");

adultPlus.addEventListener("click", function () {
  adultValue.value = parseInt(adultValue.value) + 1;
  totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
});
adultMinus.addEventListener("click", function () {
  if (parseInt(adultValue.value) > 1) {
    adultValue.value = parseInt(adultValue.value) - 1;
    totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
  }
});
childPlus.addEventListener("click", function () {
  childValue.value = parseInt(childValue.value) + 1;
  totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
  const selectElement = document.createElement("select");
  selectElement.className = "ageselect";
  selectElement.innerHTML =
    "<option value>age</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option>";
  const childDiv = document.getElementById("child-div");
  childDiv.appendChild(selectElement);
});

childMinus.addEventListener("click", function () {
  if (parseInt(childValue.value) > 1) {
    childValue.value = parseInt(childValue.value) - 1;
    totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
    const childDiv = document.getElementById("child-div");
    const selectElements = childDiv.getElementsByClassName("ageselect");
    if (selectElements.length > 0) {
      childDiv.removeChild(selectElements[selectElements.length - 1]);
    }
  }
});
