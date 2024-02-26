//let arr = [1, 2, 3, 3, 3, 1, 1, 2, 2, 2, 2, 4, 4, 4]
let arr = ["Apple", "Mango", "Banana", "Apple", "Mango", "Pomegranate"]
//let arr = [{id:'1'}, {id:'2'}, {id:'3'}, {id:'4'}]
const obj={ }

for (let index = 0; index<arr.length; index++){
    const element = arr[index]
    if(obj[element]){
        obj[element]++
    }

    else{
        obj[element]=1
    }
    
}
console.log(obj)




