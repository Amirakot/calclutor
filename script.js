let output = document.querySelector(".output");
function display(number) {
  output.value += number;
}
function deletenumber() {
  output.value = output.value.slice(0, -1);
}
function clearnumber() {
  output.value = "";
}
function calc() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = "error";
  }
}
