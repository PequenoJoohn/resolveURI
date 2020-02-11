const selectVector = () => {
    for (i = 0; i < 100; i++) {
        var number = Math.floor(Math.random() * 100 - 2)
        if (number <= 10)
            console.log("A" + "[" + [i] + "]" + " = " + number.toFixed(1))
    }
}

selectVector();
