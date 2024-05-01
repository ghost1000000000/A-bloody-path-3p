/*Declare variables below to save the different sections (divs) of your story*/
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-three");
let buttonFour = document.querySelector(".option-four");
let buttonFive = document.querySelector(".optoin-five");
let opening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionTwoEnd = document.querySelector(".option-two-end");




/* When you're ready to make event hadlers, uncomment the code below. Then fill in the blanks with the correct variables! */
buttonOne.onclick = function() {
    opening.style.display = "none";
    optionOneScreen.style.display = "block";

};
buttonThree.onclick = function() {
    optionOneScreen.style.display = "none";
    optionTwoEnd.style.display = "block";

};