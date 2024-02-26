let array1 = [1, 2, 3]

let array2 = [4, 5, 6]


array1.push(4, 5)
console.log(array1)

array1.pop()
console.log(array1)

array1.shift()
console.log(array1)

array1.unshift()
console.log(array1)

//ConcatMethod

console.log(array1.concat(array2))

//SliceMethod

array1.slice()
console.log(array1)

const fruits = ["apple", "banana", "mango", "pomegranate"]
const cirtus = fruits.slice(1, 3)
console.log(cirtus)

//SpliceMethod

const fruit = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruit.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruit)

const arr = ["Babloo", "Asoo", "Nizoo", "Gopi"]
console.log(arr.indexOf("2"))
//console.log(arr.lastIndexOf("Lachu"))
