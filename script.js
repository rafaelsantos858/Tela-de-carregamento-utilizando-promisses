// 1- Escreva uma função chamada espereNSegundos(), que obedece as premissas abaixo:
// Recebe um numero inteiro como parametro;
// Retorna uma promessa;
// Se o número não for inteiro (ex: 1,5) reject a promessa com uma mensagem de erro;
// Espere a quantidade de segundos indicada, e então resolve com sucesso a promessa;

function esperaNsegundos(num) {

    var espera = num

    new Promise(function (resolve, reject) {

        if (Number.isInteger(espera)) {
            setTimeout(() => {
                resolve(espera)
            }, 1000 * espera)
        } else {
            setTimeout(() => {
                reject("não é um numero inteiro")
            }, 1000)
        }
    }).then(res => {
        console.log("numero inteiro: " + res);
    }).catch(() => {
        console.log("o numero não é inteiro")
    }).finally(() => {
        console.log("promessa finalizada")
    }, 1000)
}

esperaNsegundos(4)

