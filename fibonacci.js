/* 
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
 ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência
 */ 

const valorTestado = 13;
const valorTestado1 = 6;

const fibonacci = (number) =>{
 const arrayFibonacci=[];
 arrayFibonacci[0]=0;
 arrayFibonacci[1]=1
    if( number < 2) return number;
    if (typeof(number) !== 'number') return "Valor inválido"
    
    for (let i = 2; i <= number; i++){
        arrayFibonacci[i] = arrayFibonacci[i-2]+ arrayFibonacci[i-1]
    }
    
    for( valor of arrayFibonacci){
        if (arrayFibonacci.indexOf(number)>=0) return 'O valor pertence a sequencia de Fibonacci'
        return 'O valor não pertente a sequencia de Fibonacci'
    } 
    //return arrayFibonacci
}

try{
    console.log(fibonacci(valorTestado));
} catch(err){
    console.log(err)
}
