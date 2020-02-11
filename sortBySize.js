const sortBySize = (arrays) => {
    for (let i = 0; i < arrays.length; ++i) {
        let string = arrays[i]
        let resultado = []
        const palavras = string.split(/ +/g).sort((a, b) => b.length - a.length)
        for (let palavra of palavras) {
            resultado.push(palavra)
        }
        arrays[i] = resultado.join(" ")
    }
    console.log(arrays)
}

sortBySize([
    "Top Coder comp Wedn at midnight",
    "one three five",
    "I love Cpp",
    "sj a sa df r e w f d s a v c x z sd fd"
])
