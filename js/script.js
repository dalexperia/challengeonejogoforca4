const words = ['amor','cadeira','telepatia'];
let indice = Math.round(Math.random() * (words.length - 1));
console.log(indice);
const palavraEscolhida = words[indice];
const array = palavraEscolhida.split('');
let letrasCertas = [];
let letrasErradas = [];
console.log(palavraEscolhida);
let tracos = document.getElementById('tracos');
let conteudo = document.getElementById('conteudo');
let erradas = document.getElementById('erros');
let erros = 0;
let palavraEmFormacao = [];

conteudo.innerText = '';
let formarPalavra = () => {
    let count = 1;
    while (count <= palavraEscolhida.length){
        palavraEmFormacao.push('?');
        tracos.innerHTML += '&#32;&#32;___&#32;&#32;';
        count += 1;
    }
}

let comparaLetra = (obj) => {
    conteudo.innerHTML = '';
    for (let [i, letter] of Object.entries(obj)) {
        palavraEmFormacao[i] = letter;
    }

    conteudo.innerHTML = palavraEmFormacao.join('');
}

formarPalavra();
letrasEncontradas = {};

document.onkeyup = e => {

        if (erros === 6){
            console.log('Fim de Jogo');
            return null;
        }
        for (let letter of letrasErradas.concat(letrasCertas)) {
            if (e.key === letter) {
                console.log('Já foi digitada');
                return null;
            }
        }
        for (let [index, letter] of Object.entries({...array})) {
            if (e.key === letter) {
                letrasCertas.push(letter);
                letrasEncontradas[index] = letter;
                comparaLetra(letrasEncontradas);
            }
        }

        if (!array.includes(e.key)) {
            letrasErradas.push(e.key);
            erradas.innerHTML = letrasErradas.join(' - ');
            erros += 1;
        }

        console.log(letrasEncontradas);
}


