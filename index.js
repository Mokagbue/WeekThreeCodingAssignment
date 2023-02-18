//hello

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array 
// from the value in the last element of the array 

let ages = [100, 3, 9, 23, 64, 2, 8, 28, 93]; //1.b added a new number to the front '100'
 console.log(ages);

let subtractAge = (array) => {
  let lastItem = array.pop(); //array.pop() gets us the last item of the array, and it wasn't specified if we should alter the og array...so hopefully that's ok, as .pop() literally takes the last item off and changes the og array length.
  let firstItem = array[0] //this will get us the first item, whatever is in the 0 index
  return console.log(firstItem - lastItem)
}

subtractAge(ages);

//1.c
let age = [1,2,3,4]

let averageAge = (array) => {
let reducerCounter = 0; //this is a 'counter' that starts us off on zero. Necessary for the reducer.
 let arraySum = array.reduce((nextItem, currentItem) => nextItem + currentItem, reducerCounter); //here we are using the reducer method which iterates through the array and, in this case, is adding the items of the array up to give us a single, total.
  return (arraySum/array.length) //taking what the reducer gave us and dividing it by the arrays length
}
console.log(averageAge(age))


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", 'Tommy', 'Tim', 'Sally', 'Buck', "Bob"]
// 2.a loop through the array
// at every index we want to count how many indexes there are, push those numbers into a new array
// we will take the new array and reduce it, then divide it by the length of the array.

let findAvgStringLength = (arr) => {
  let stringLengths = [];

  for(i=0;i<arr.length; i++){
    stringLengths.push(arr[i].length)
  }
  let stringSum = stringLengths.reduce((nextString, currentString) => nextString + currentString, 0)
  return (stringSum/stringLengths.length)
}

console.log(findAvgStringLength(names))

//2.b
console.log(names.join(" "))

// 3. How do you access the last element of any array?

//You access the last element in an aray using the array.pop() method


//4.  How do you access the first element of any array?

//You access the first element in an array using the array.shift() method.


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for(i=0;i<names.length; i++){
  nameLengths.push(names[i].length)
}
console.log(nameLengths)

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log(nameLengths.reduce((x,y) => x+y))

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let repeat = (word, n) => {
  return word.repeat(n)
}
console.log(repeat("frog",4))

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
let fullName = (firstName, lastName) => {
  return (`${firstName} ${lastName}.`)
}
console.log(fullName("Bruce", "Wayne"))


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThan(array) {
  let sum = array.reduce((x,y) => x+y)
  if(sum > 100){
    return true
  } else{
    return false
  }
}
console.log(greaterThan([1,2,3]))

// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numbers = [1,2,3]

let averageNumber = (array) => {
  return (array.reduce((currentIndex, nextIndex) => (currentIndex + nextIndex)/array.length))
}
console.log(averageNumber(numbers))

// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
