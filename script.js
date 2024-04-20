document.getElementById("check-btn").addEventListener("click", function () {
  // Event Listener: Adds a click event listener to the element with the ID "check-btn"

  const textInput = document.getElementById("text-input").value;
  // Input Retrieval: Retrieves the value of the input field with the ID "text-input" and stores it in the variable textInput

  const resultElement = document.getElementById("result");
  // Result Element Retrieval: Retrieves the element with the ID "result" and stores it in the variable resultElement

  if (textInput.trim() === "") {
    // Input Validation: Checks if the input is empty or contains only whitespace
    alert("Please input a value"); // Displays an alert if the input is empty
  } else {
    const cleanedInput = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Input Cleaning: Removes non-alphanumeric characters and converts the input to lowercase

    const reversedInput = cleanedInput.split("").reverse().join("");
    // Reversing the Input: Splits the cleaned input into an array of characters, reverses the array, and joins it back into a string

    if (cleanedInput === reversedInput) {
      // Palindrome Checking: Compares the cleaned input with its reversed form to determine if it's a palindrome
      resultElement.textContent = textInput + " is a palindrome"; // Displays a message indicating that the input is a palindrome
    } else {
      resultElement.textContent = textInput + " is not a palindrome"; // Displays a message indicating that the input is not a palindrome
    }
  }
});
