
const estados = [
    {estado:"es", faturamento: 67.83643},
    {estado:"rj", faturamento: 36.67866},
    {estado:"mg",faturamento: 29.22988},
    {estado:"es", faturamento: 27.16548},
    {estado:"outros", faturamento: 19.84953}
]

const soma = estados.map(valor => valor.faturamento).reduce((prev, curr) => prev + curr,0)
// estado * soma / 100 para achar o percentual 
const percentual = estados.map (percentual => (percentual.faturamento * soma/100).toFixed(2) )


for (let indice in  percentual){
    console.log('Estado:', estados[indice].estado, 'Percentual: ', percentual[indice],'%') 
}
