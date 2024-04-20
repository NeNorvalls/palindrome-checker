# Palindrome Checker

This is a simple web application that allows users to check if a given text is a palindrome.

## Usage

1. **Enter Text**: Input the text you want to check into the provided input field.

2. **Click Check**: Click the "Check" button to see if the entered text is a palindrome.

3. **View Result**: The result will be displayed below the input field, indicating whether the entered text is a palindrome or not.

## How it Works

1. **Event Listener**: When the "Check" button is clicked, the associated function is triggered.

2. **Input Retrieval**: The value of the input field is retrieved.

3. **Input Validation**: If the input is empty or contains only whitespace, an alert is displayed prompting the user to input a value.

4. **Palindrome Checking**: If the input is not empty, it is cleaned by removing non-alphanumeric characters and converting it to lowercase. Then, the cleaned input is reversed.

5. **Result Display**: If the cleaned input is equal to its reversed form, it means the input is a palindrome, and the result is displayed accordingly. Otherwise, it's not a palindrome.

## Example

- Entering "racecar" will result in "racecar is a palindrome".
- Entering "hello" will result in "hello is not a palindrome".

## Deployment

This project is deployed on Netlify:

- [Live Demo](Netlify_Link)

## File Structure

- `index.html`: The HTML file containing the structure of the web page.
- `styles.css`: The CSS file containing styles for the web page.
- `script.js`: The JavaScript file containing the logic for the Palindrome Checker.

## Author

Created by NeNorvalls.
