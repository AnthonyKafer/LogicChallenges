const myFactorial = (x) => {
    function print(x) {
        let result = fac(x)
        console.log(`A fatorial de ${x} é ${result}`)
    }
    function fac(x) {
        if (x < 2) return x
        return x * fac(x - 1)
    }
    print(x)
}



myFactorial(10)