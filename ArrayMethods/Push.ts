const myPush = (arr, value) => {
    arr[arr.length++]
    arr[arr.length - 1] = value
    return arr
}

const arrTest = [1, 2, 3, 4, 5, 6]

arrTest.push(7)
console.log(arrTest)

console.log(myPush(arrTest, 7))
console.log(myPush(arrTest, 8))
console.log(myPush(arrTest, 9))