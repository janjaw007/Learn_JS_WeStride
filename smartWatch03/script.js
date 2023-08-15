// document.getElementById("number").innerText = result;

// console.log(document.getElementById("number").textContent.trim());

document.getElementById("card-Name").addEventListener("input", function () {
  let cardName = document.getElementById("card-Name").value;
  document.getElementById("owner-name").textContent = cardName;
});
document.getElementById("bank-Form").addEventListener("input", function () {
  let bankName = document.getElementById("bank-Form").value;
  document.getElementById("bank-name").textContent = bankName;
});

document.getElementById("cc-num").addEventListener("input", function () {
  let cardNum = document.getElementById("cc-num").value;
  document.getElementById("number").textContent = `${cardNum.substring(
    0,
    4
  )} ${cardNum.substring(4, 8)} ${cardNum.substring(8, 12)} ${cardNum.substring(
    12,
    16
  )}`;
});

document.getElementById("mmyyForm").addEventListener("input", function () {
  let mmYY = document.getElementById("mmyyForm").value;
  mmYY = `${mmYY.substring(0, 2)}${mmYY.length > 1 ? "/" : ""}${mmYY.substring(
    2,
    4
  )}`;
  document.getElementById("MM").textContent = mmYY;
});

document.getElementById("cvcForm").addEventListener("input", function () {
  let cvcNum = document.getElementById("cvcForm").value;
  document.getElementById("cvc").textContent = cvcNum;
});
