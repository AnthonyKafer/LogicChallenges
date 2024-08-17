const myPop = (arr)=>{
    const removed = arr[arr.length -1]
    arr = arr[arr. length --]
    return removed
}


const arrTest = ["Bob","Valdisney","Pedrinho","Lobo Mau"]


const removedItem = myPop(arrTest)
console.log(arrTest)
console.log(removedItem)

const popedItem = arrTest.pop()
console.log(arrTest + " Método nativo")
console.log(popedItem + " Método nativo")
