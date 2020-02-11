const subVector = () => {
    let vetor = [1, 5, 5, -25, 0, 96, 1, -50, 1, 10, 24];
    if (vetor.length < 10) {
        console.log("Please insert 10 numbers.")
    } else {
        for (let i = 0; i < vetor.length; ++i) {
            if (!vetor[i] || vetor[i] < 0)
                vetor[i] = 1
            console.log(`X[${i}] = ${vetor[i]}`)
        }
    }
}

subVector();
