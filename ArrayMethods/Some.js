const mySome = (func, arr)=>{
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i]) == true) return true

    }
    return false
}

const arrayTest = [1, 2, 3, 4, 5]

const funcTest = (e)=> e === 2

console.log(arrayTest.some(funcTest, arrayTest) + " Método nativo")
console.log(mySome(funcTest, arrayTest))