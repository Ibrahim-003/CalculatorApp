const $display = document.querySelector(".calculator__display");
const $keys = document.querySelector(".calculator__body");

$keys.addEventListener("click", (e) => {
  let target = e.target;

  if (target.id == "clear") {
    $display.textContent = "";
  } else if (target.id == "backspace") {
    console.log("hello");
    let string = $display.innerText.toString();
    console.log(string);
    $display.innerText = string.substr(0, string.length - 1);
  } else if ($display.textContent != "" && target.id == "equal") {
    $display.innerText = eval($display.innerText);
  } else if ($display.innerText == "" && target.id == "equal") {
    $display.textContent = "Empty!";
    setTimeout(() => {
      $display.innerText = "";
    }, 2000);
  } else {
    $display.textContent += target.id;
  }
});
