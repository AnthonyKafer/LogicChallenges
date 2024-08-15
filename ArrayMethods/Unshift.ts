const myUnshift = (arr, ...value) => {


    for (let i = value.length; i > 0; i--) {
        arr.length++
        value[i] = value[i - 1]
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1]
        }

        arr[0] = value[i]

    }

    console.log(arr)
}

const arrTest = [1, 2, 3, 4, 5]

myUnshift(arrTest, "teste", 3, "fodase", 1, 412, 4)

