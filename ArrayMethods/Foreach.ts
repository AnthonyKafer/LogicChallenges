const myForeach = (func, arr) => {
    for (let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}



const arrTest = ["A", "B", "C"]

arrTest.forEach((e) => console.log (`Elemento ${e} Método nativo`))
myForeach((e)=> console.log(`Elemento ${e}`), arrTest)