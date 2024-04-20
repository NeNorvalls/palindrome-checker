document.getElementById("check-btn").addEventListener("click", function () {
  const textInput = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (textInput.trim() === "") {
    alert("Please input a value");
  } else {
    const cleanedInput = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");

    if (cleanedInput === reversedInput) {
      resultElement.textContent = textInput + " is a palindrome";
    } else {
      resultElement.textContent = textInput + " is not a palindrome";
    }
  }
});
