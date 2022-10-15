// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
const anchorsExtra = document.querySelectorAll("a");
const alertWhenHoverLink = function () {
  for (let i = 0; i < anchorsExtra.length; i++) {
    anchorsExtra[i].addEventListener("mouseover", () => {
      alert(anchorsExtra[i].href);
    });
  }
};
// alertWhenHoverLink();

// 42) Create a button that will hide every image on the page when clicked
const tableExtra = document.getElementById("table");
const buttonHidesAllImages = document.createElement("button");
(buttonHidesAllImages.innerText = "Hide All Images"),
  document.body.insertBefore(buttonHidesAllImages, tableExtra);
buttonHidesAllImages.classList.add("btn");
const allImages = document.querySelectorAll("img");

const hideAllImages = function () {
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].hidden = !allImages[i].hidden;
  }
};
buttonHidesAllImages.addEventListener("click", hideAllImages);
// 43) Create a button that will hide or show the table on the page when clicked
const buttonHidesTable = document.createElement("button");
(buttonHidesTable.innerText = "Hide Table"),
  document.body.insertBefore(buttonHidesTable, tableExtra);
buttonHidesTable.classList.add("btn");

const hideTable = function () {
  table.hidden = !tableExtra.hidden;
};
buttonHidesTable.addEventListener("click", hideTable);

// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
// TO CREATE ANOTHER ROW WITH NUMERIC CONTENT JUST FOR THIS CHALLENGE AND CALCULATE SUM

// 45) Delete the last letter from the heading each time the user clicks on it
const buttonChangeHeading = document.createElement("button");
buttonChangeHeading.innerText = "Change Heading";
document.body.insertBefore(buttonChangeHeading, tableExtra);
buttonChangeHeading.classList.add("btn");

const removeLastChar = function () {
  let string = heading.innerText;
  let newStr = "";
  newStr = string.slice(0, -1);
  heading.innerText = newStr;
  return heading.innerText;
};
buttonChangeHeading.addEventListener("click", removeLastChar);

// 46) Change the background color of a <td> if the user clicks on it
const allTds = document.querySelectorAll("td");
const changeTdBackground = function () {
  for (let i = 0; i < allTds.length; i++) {
    allTds[i].addEventListener("click", function () {
      allTds[i].classList.add("green-background");
    });
  }
};
changeTdBackground();

// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
const buttonRandomDeleteTd = document.createElement("button");
buttonRandomDeleteTd.innerText = "Delete Random <td>";
buttonRandomDeleteTd.classList.add("btn");

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(buttonRandomDeleteTd, tableExtra);

const randomNr = function (nr) {
  const random = Math.floor(Math.random() * (nr + 1));
  return random;
};
console.log(randomNr(allTds.length));

const deleteRandomTd = function () {
  let random = randomNr(allTds.length);
  for (let i = 0; i < allTds.length; i++) {
    if (i === random) {
      allTds[i].remove();
    }
  }
};
buttonRandomDeleteTd.addEventListener("click", deleteRandomTd);

// 48) Add automatically a pink border to a cell when the mouse hovers it
const addPinkWhenHover = function () {
  for (let i = 0; i < allTds.length; i++) {
    allTds[i].addEventListener("mouseover", () => {
      allTds[i].className = "pink-border";
    });
  }
};
addPinkWhenHover();

// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
const buttonCreateNewTable = document.createElement("button");
buttonCreateNewTable.innerText = "Create new table";
buttonCreateNewTable.classList.add("btn");

insertAfter(buttonCreateNewTable, buttonRandomDeleteTd);

const addNewTable = function () {
  const table = document.createElement("table");
  table.classList.add("new-table");

  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("new-table-tr");
    table.appendChild(tr);

    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");
      td.classList.add("new-table-td");
      tr.appendChild(td);
    }
  }
  insertAfter(table, buttonCreateNewTable);
};
buttonCreateNewTable.addEventListener("click", addNewTable);

// 50) Write a function to remove the last table from the page
const buttonRemoveNewTable = document.createElement("button");
buttonRemoveNewTable.innerText = "Remove new table";
buttonRemoveNewTable.classList.add("btn");

insertAfter(buttonRemoveNewTable, buttonCreateNewTable);

const removeNewLastTable = function () {
  const allNewTables = document.querySelectorAll(".new-table");
  console.log({ allNewTables });
  for (let i = 0; i < allNewTables.length; i++) {
    if (i === allNewTables.length - 1) {
      allNewTables[i].remove();
    }
  }
};

buttonRemoveNewTable.addEventListener("click", removeNewLastTable);
