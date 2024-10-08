const mySplice = (arr, index, remove, ...values) => {

    let startP = []
    let endP = []
    let finalArr = []

    if (!index || typeof index !== "number") return console.log([])
    if (typeof remove !== "number") return console.log(arr)
    if (index > arr.length) index = arr.length
    if(index < 0) index = index = index + arr.length 

    for (let i = 0; i < index; i++) {
        startP[i] = arr[i]
        finalArr[i] = startP[i]
    }

    for (let i = 0; i < values.length; i++) {
        finalArr[index + i] = values[i]
    }

    for (let i = 0; i < arr.length - index; i++) {
        endP[i] = arr[index + i]
        finalArr[index + values.length + i] = endP[i]
    }

    for (let i = remove; i > 0; i--) {
        finalArr[index + i + values.length - 1] = finalArr[finalArr.length - 1]
        finalArr.length--
    }

    arr = finalArr
    console.log(arr)

}

const arrTest = [1, 2, 3, 4, 5, 7, 8, 9]

// arrTest.splice(-1, 0, "fodase")
// console.log(arrTest)

mySplice(arrTest, -2, 0, "fodase", "fodase 2")