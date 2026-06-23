let total = 0;

function addFood() {
  let food = document.getElementById("food").value;
  let cal = Number(document.getElementById("cal").value);

  if (!food || !cal) return;

  total += cal;

  let li = document.createElement("li");
  li.innerText = food + " - " + cal + " kcal";

  document.getElementById("list").appendChild(li);
  document.getElementById("total").innerText = total;

  document.getElementById("food").value = "";
  document.getElementById("cal").value = "";
}
