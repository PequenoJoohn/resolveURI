const fitsOrNot = (N, N1, N2) => {
    var N;
    for (var i = 0; i < N; i++) {
        var A = N1;
        var B = N2;
        A.endsWith(B) ? console.log("Encaixa") : console.log("Não Encaixa");
    }
}
/**
 * Args 0 = Repeat of Numbers
 * Args 1 = Number A
 * Args 3 = Number B 
 */
fitsOrNot(1, "56234523485723854755454545478690", "78690");
fitsOrNot(1, "5434554", "543");
fitsOrNot(1, "1243", "1243")
fitsOrNot(1, "54", "64545454545454545454545454545454554");
