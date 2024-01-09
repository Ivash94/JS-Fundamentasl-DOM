// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js


const header = document.querySelector("#title");
const textPar = document.querySelector("#myDiv");
const myList = document.querySelector("#myList");
const invSpan = document.querySelector(".style_elements span");


function applyStyles() {
    header.style.backgroundColor = "green";
    textPar.children[0].style.fontWeight = "bold";
    textPar.children[1].style.color = "red";
    textPar.children[2].style.textDecoration = "underline";
    textPar.children[3].style.fontStyle = "italic";
    myList.style.display = "flex";
    myList.style.listStyle = "none";
    invSpan.style.display = "none";
}

// module.exports = applyStyles;
