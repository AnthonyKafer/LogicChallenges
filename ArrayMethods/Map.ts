const myMap = (func, arr) => {
    let newArr = []

    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            newArr += "["
        }

        if (i == arr.length - 1) {
            newArr += func(arr[i]) + "]"
        }

        else {
            newArr += func(arr[i]) + ", "
        }
    }
    return `(${arr.length}) ${newArr}`
}

const originArray = [10, 20, 30, 40, 50]

console.log(myMap((e) => e + 1, originArray))

console.log(originArray.map((e) => e + 1))