const myShift = (arr) => {
    const removed = arr[0]
    arr[0] = arr.length --
    
    console.log(arr[0])
    return removed
}

const arrayTest = [1, 2, 3, 4]

// const removedItem = arrayTest.shift()
// console.log(arrayTest + " Método nativo")
// console.log(removedItem + " Método nativo")

const removedItemTest = myShift(arrayTest)
console.log(removedItemTest)
console.log(arrayTest)