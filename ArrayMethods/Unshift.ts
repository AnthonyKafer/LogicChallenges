const myUnshift = (arr: any[], ...values: any[]) => {

    const copy: any[] = [...values, ...arr]
    for(let i = 0; i < copy.length; i++) {
        arr[i] = copy[i]
    }

    

    // for (let i = values.length; i > 0; i--) {
    //     arr.length++
    //     values[i] = values[i - 1]
    //     for (let i = arr.length - 1; i >= 0; i--) {
    //         arr[i] = arr[i - 1]
    //     }

    //     arr[0] = values[i]

    // }

    console.log(arr)
}

const arrTest = [1, 2, 3, 4, 5]

myUnshift(arrTest, "teste", 3, "fodase", 1, 412, 4)