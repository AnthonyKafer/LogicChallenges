const myEvery = (func, arr)=>{

    for(let i = 0; i < arr.length; i++){
        if (func(arr[i]) == false ) return false
        
    }
     return true
}

const testMethods = (e)=> e > 1
const secondTestMethods = (e)=> e == 1

const arrTest = [20, 5, 40, 12, 18]
const secondTest = [1, 2, 1, 1, 1, 1]

console.log(arrTest.every(testMethods) + " método nativo")
console.log(myEvery(testMethods, arrTest))

console.log(secondTest.every(secondTestMethods) + " método nativo")
console.log(myEvery(secondTestMethods, secondTest))