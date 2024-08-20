const mySort = (arr) => {

    let orderedArr = []

    function searchMinor() {
        let minor = arr[0]

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] < minor ? minor = arr[i] : minor
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let minus = searchMinor()
        arr[i] = minus
    }


    console.log(orderedArr)

}
const arrTest = [5, 3, 7, 8, 10, 1, 4, 2, 6, 9]

// console.log(arrTest.sort())

mySort(arrTest)