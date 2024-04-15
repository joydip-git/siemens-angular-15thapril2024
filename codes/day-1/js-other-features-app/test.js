function outer() {
    this.x = 100
    console.log(this)


    // let inner = function () {
    const inner = () => {
        this.y = 200
        console.log(this)
        console.log(this.x + this.y)
    }

    //inner = inner.bind(this)
    inner()
}
new outer()