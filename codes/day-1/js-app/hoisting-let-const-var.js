function foo() {
    //function declaration
    console.log(add(12, 13))
    function add(a, b) {
        return a + b
    }
    console.log(add(12, 13))

    //console.log(subtract(12, 3))
    //function expression
    var subtract
    subtract = function (a, b) {
        return a - b
    }
    console.log(subtract(12, 3))
    //console.log(x) //? undefined
    var x //var x
    x = 10
    console.log(x)//? 10
    var i
    for (i = 0; i < 1; i++) {
        var x //var _x
        x = 20
        console.log(x)//? 20
    }
    console.log(x)//? 20

    //console.log(y)
    //const y = 20
    //y = 100
    //console.log(y)
}
foo()


