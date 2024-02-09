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
});
childMinus.addEventListener("click", function () {
  if (parseInt(childValue.value) > 1) {
    childValue.value = parseInt(childValue.value) - 1;
    totalValue.value = parseInt(adultValue.value) + parseInt(childValue.value);
  }
});
