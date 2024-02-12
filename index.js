const removeAdult = document.getElementById("removeAdult");
const addAdult = document.getElementById("addAdult");
const adultValue = document.getElementById("adultValue");
const removeChild = document.getElementById("removeChild");
const addChild = document.getElementById("addChild");
const childValue = document.getElementById("childValue");
const totalValue = document.getElementById("total-value");

addAdult.addEventListener("click", function () {
  adultValue.value++;
  totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
});
removeAdult.addEventListener("click", function () {
  if (parseInt(adultValue.value) > 1) {
    adultValue.value--;
    totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
  }
});
addChild.addEventListener("click", function () {
  if (childValue.value < 4) {
    childValue.value++;
    totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
    const selectElement = document.createElement("select");
    selectElement.className = "ageselect mx-2";
    selectElement.innerHTML =
      "<option value>age</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option>";
    const childDiv = document.getElementById("child-div");
    childDiv.appendChild(selectElement);
  }
});

removeChild.addEventListener("click", function () {
  if (childValue.value > 0) {
    childValue.value--;
    totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
    const childDiv = document.getElementById("child-div");
    const selectElements = childDiv.getElementsByClassName("ageselect");
    if (selectElements.length > 0) {
      childDiv.removeChild(selectElements[selectElements.length - 1]);
    }
  }
});
