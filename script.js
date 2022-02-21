const multTable = (n) => {
    let matriz = [];
    for (let i = 0; i <= n; i++) {
        matriz[i] = []
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            matriz[i][j] = i * j
        }
    }
    console.table(matriz)
}