// DOM EXERCISES
// 31) Get the element with an id of "container" from the page
const container = document.getElementById("container");

// 32) Get every <td> element from the page
// 33) Use a loop for printing the text inside of every <td> element in the page
const tds = document.querySelectorAll("td");
for (let td of tds) {
  console.log(td.innerText);
}

// 34) Write a function to change the heading of the page
// +
// 45) Delete the last letter from the heading each time the user clicks on it
const table = document.querySelector("table");
const heading = document.querySelector("h1");
const buttonChangeHeading = document.createElement("button");
buttonChangeHeading.innerText = "Change Heading";
document.body.insertBefore(buttonChangeHeading, table);
buttonChangeHeading.classList.add("btn");

const removeLastChar = function (str) {
  //   let newStr = ``;
  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, -1);
    return newStr;
  }
};
console.log(removeLastChar("Different Heading"));
// heading.addEventListener("click", removeLastChar);

const changeHeading = function () {
  heading.innerText = "Different Heading";
  let string = heading.innerText;
  heading.style.color = "purple";
  removeLastChar(string);
};
buttonChangeHeading.addEventListener("click", changeHeading);

// 35) Write a function to add an extra row to the table

const addExtraRow = function () {
  const row = document.createElement("tr");

  table.appendChild(row);
};
addExtraRow();

const allTheRows = document.querySelectorAll("tr");
const checkRows = function () {
  console.log(allTheRows.length);
};

// 36) Write a function to add a class of "test" to each row in the table
const addClassToRows = function () {
  for (let row of allTheRows) {
    row.classList.add("test");
  }
};
addClassToRows();

// 37) Write a function to add a red background to every link in the page
const anchors = document.querySelectorAll("a");
const colorAnchors = function () {
  for (a of anchors) {
    a.style.backgroundColor = "red";
  }
};
colorAnchors();

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
  console.log("Page loaded");
};

// 39) Write a function to add new items to a unordered list
const ul = document.querySelector("ul");
const addListItems = function () {
  const li = document.createElement("li");
  li.innerText = "Added li";
  ul.appendChild(li);
};
ul.addEventListener("click", addListItems);

// 40) Write a function to empty a list
const olListItems = document.querySelectorAll("ol li");
const ol = document.querySelector("ol");
const emptyList = function () {
  ol.innerHTML = "";
  //   for (let i = 0; i < olListItems.length; i++) {
  //     ol.removeChild(ol.childNodes[i]);
  //   }
};
ol.addEventListener("click", emptyList);
