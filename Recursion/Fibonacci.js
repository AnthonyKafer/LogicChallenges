const myFibonacci = (x) => {
    function print(x) {
        let temp = fibo(x);
        console.log(`A sequência de Fibonacci de ${x} é ${temp}`)
        console.log(`Esta função levou ${x ** 2} operações`)
    }
    function fibo(x) {
        if (x < 2) return x
        return fibo(x - 1) + fibo(x - 2)
    }
    print(x)
}

myFibonacci(25)