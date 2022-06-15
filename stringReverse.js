let nome = "Tabatta";
let nomeInvertido = ""
const reverse=(nome)=>{
    for (let i = nome.length-1; i >= 0; i--){
        nomeInvertido+= nome[i] + " "
    }
    console.log(nomeInvertido)
}

console.log(reverse(nome))