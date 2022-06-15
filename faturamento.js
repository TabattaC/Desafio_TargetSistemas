
const jsonData = require('./dados.json')

//• O maior valor de faturamento ocorrido em um dia do mês;
const maiorValor =  jsonData.reduce(function(prev, current){
    return (prev.valor > current.valor) ? prev : current
})
//O menor valor de faturamento ocorrido em um dia do mês;
const semZero =  jsonData.filter(function(arr){
    return arr.valor > 0;
})

const menorValor =  semZero.reduce(function(prev, curr){
    return (prev.valor < curr.valor) ? prev : curr
})

// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 
const somaTotal = jsonData.map (valor => valor.valor).reduce((prev, curr)=> prev + curr,0)
const media = somaTotal/ jsonData.length;

const dias =  jsonData.filter(function(arr){
    return arr.valor > media;
})
console.log('Maior valor:', maiorValor)
console.log( 'Menor valor:', menorValor)
console.log('Números de dias no mês que apresentam o valor de faturamento diário maior que a média mensal: ', dias)