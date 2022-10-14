// JS EXERCISES

// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
console.log("--- EX 21 ---");
const x = "John";
const y = "Doe";
console.log(`"${x} <> ${y}"`);

// 22) Create an object with properties such name, surname, email
console.log("--- EX 22 ---");
const person = {
  name: "Name",
  surname: "Surname",
  email: "n_s@gmail.com",
};
console.log({ person });

// 23) Delete the email property from the previously created object
console.log("--- EX 23 ---");
delete person.email;
console.log({ person });

// 24) Create an array with 10 strings in it
console.log("--- EX 24 ---");
let array = [];
let string = "string";
let nr = 10;

const createStringsArray = (nr) => {
  for (let i = 0; i < nr; i++) {
    array.push(`${string} ${i}`);
  }
  return array;
};
console.log(createStringsArray(10));

// 25) Print in the console every string from the previous array
console.log("--- EX 25 ---");
const printStrigs = (array) => {
  for (let string of array) {
    console.log(string);
  }
};
console.log(printStrigs(array));

// 26) Create an array with 100 random numbers in it
console.log("--- EX 26 ---");
let randomArray = [];
let nrs = 100;
let number = 17;
const randomGenerator = () => {
  let randomNr = Math.floor(Math.random() * 100 + 1);
  return randomNr;
};
const createRandomArray = (input) => {
  for (let i = 0; i < input; i++) {
    randomArray.push(randomGenerator());
  }
  return randomArray;
};
console.log(createRandomArray(nrs));

// 27) Write a function to get the maximum and minimum values from the previously created array
console.log("--- EX 27 ---");
const minMaxValues = (array) => {
  let min = array[0];
  let max = array[0];

  for (let value of array) {
    if (min > value) {
      min = value;
    }

    if (max < value) {
      max = value;
    }
  }

  return { min, max };
};
console.log(minMaxValues(randomArray));

// 28) Create an array of arrays, in which every array has 10 random numbers
console.log("--- EX 28 ---");
let arrayOfArrays = [];
let numbers = 10;

const createArrayOfArrays = (nrOfArrays, nrOfElements) => {
  for (let i = 0; i < nrOfArrays; i++) {
    let array = [];
    for (let j = 0; j < nrOfElements; j++) {
      array.push(randomGenerator());
    }
    arrayOfArrays.push(array);
  }
  return arrayOfArrays;
};
console.log(createArrayOfArrays(3, 10));

// 29) Create a function that gets 2 arrays as parameters and returns the longest one
console.log("--- EX 29 ---");
const getLongestArray = (arr1, arr2) => {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;

  if (arr1Length > arr2Length) {
    return `The First inputted array, ${arr1} is the longest becaue it has ${arr1.length} elements while the second one only has ${arr2.length}`;
  } else if (arr1Length < arr2Length) {
    return `The Second inputted array, ${arr2} is the longest becaue it has ${arr2.length} elements while the second one only has ${arr1.length}`;
  } else {
    return `The 2 arrays have the same length: ${arr1.length} elements`;
  }
};
console.log(
  getLongestArray(
    [71, 80, 100, 40, 50, 79, 87, 17, 68, 20],
    [69, 38, 100, 24, 37, 69, 30, 73, 46]
  )
);
console.log(
  getLongestArray(
    [71, 80, 100, 40, 50, 79, 87, 17, 68],
    [69, 38, 100, 24, 37, 69, 30, 73, 46]
  )
);
console.log(
  getLongestArray(
    [71, 80, 100, 40, 50, 79, 87, 17],
    [69, 38, 100, 24, 37, 69, 30, 73, 46]
  )
);

// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
console.log("--- EX 30 ---");
const getHigherSumArray = (arr1, arr2) => {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  if (sum1 > sum2) {
    return `the summed values of the first array's elements is the bigger one: ${sum1}`;
  } else if (sum1 < sum2) {
    return `the summed values of the second array's elements is the bigger one: ${sum2}`;
  } else {
    return `the summed values of both arrays are the same: ${sum1}`;
  }
};
console.log(
  getHigherSumArray(
    [71, 80, 100, 40, 50, 79, 87, 17, 68, 20],
    [69, 38, 100, 24, 37, 69, 30, 73, 46]
  )
);
console.log(
  getHigherSumArray(
    [71, 80, 100, 40, 50, 79, 87, 17, 68, 20],
    [69, 38, 100, 24, 37, 69, 30, 73, 46, 25643, 1]
  )
);
console.log(
  getHigherSumArray(
    [71, 80, 100, 40, 50, 79, 87, 17, 68, 20],
    [71, 80, 100, 40, 50, 79, 87, 17, 68, 20]
  )
);

console.log(
  "------------------REMOVE LAST CHARACTER FROM STRING-------------------"
);
const randomN = function (nr) {
  const random = Math.floor(Math.random() * (nr + 1));
  return random;
};
let all = [1, 2, 3];
const deleteRando = function () {
  let random = randomN(all.length);
  for (let i = 0; i < all.length; i++) {
    if (i === random) {
      all.splice(i, 1);
    }
  }
  return all;
};
console.log(deleteRando());
