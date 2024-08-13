const myEvery = (func, arr)=>{

    for(let i = 0; i < arr.length; i++){
        if(!func(arr)){
        console.log(i)
        }
        console.log("teste")
    }
   
}

const testMethods = (e)=> e < 4
const secondTestMethods = (e)=> e == 1

const arrTest = [20, 5, 40, 12, 18]
const secondTest = [1, 2, 1, 1, 1, 1]

// console.log(arrTest.every(testMethods))
// console.log(myEvery(testMethods, arrTest))

console.log(secondTest.every(secondTestMethods))
console.log(myEvery(secondTestMethods, secondTest))