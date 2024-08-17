const myShift = (arr) => {
    const removed = arr[0]

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--

    return removed
}

const arrayTest = [1, 2, 3, 4, 5]

// const removedItem = arrayTest.shift()
// console.log(arrayTest + " Método nativo")
// console.log(removedItem + " Método nativo")

const removedItemTest = myShift(arrayTest)
console.log(removedItemTest)
console.log(arrayTest)