const myPotentiation = (x, y) => {
    function print(x, y) {
        let result = Poten(x, y)
        console.log(`${x} elevado à ${y}º potência é ${result}`)
    }

    function Poten(x, y) {
        if (y < 2) return x
        return x * Poten(x, y - 1)
    }
    print(x, y)
}

myPotentiation(2, 10)