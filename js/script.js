const words = ['amor','cadeira','telepatia'];
let indice = Math.round(Math.random() * (words.length - 1));
const palavraEscolhida = words[indice].toUpperCase();
const array = palavraEscolhida.split('');
let letrasCertas = [];
let letrasErradas = [];
let erros = 0;
let acertos = 0;
let palavraEmFormacao = [];

console.log(palavraEscolhida);
// Divs criadas para separa o conteúdo
let dTracos = document.querySelector('#tracos');
let dconteudo = document.querySelector('#conteudo');
let erradas = document.getElementById('erros');
let dresultado = document.querySelector('#resultado');

let formarPalavra = () => {
    let count = 1;
    while (count <= palavraEscolhida.length){
        let cTracos = document.createElement('div');
            cTracos.style.display = 'inline-block';
            cTracos.style.borderTop = '3px solid black';
            cTracos.style.width = '30px';
            cTracos.style.height = '20px';
            cTracos.style.marginLeft = '15px';
            dTracos.append(cTracos);
        palavraEmFormacao.push("\u005F");
        count += 1;
    }
}
let comparaLetra = (obj) => {

    for (let [i, letter] of Object.entries(obj)) {
        palavraEmFormacao[i] = letter.toUpperCase();
    }

    let pDiv = document.createElement('div');
    pDiv.style.display = 'block';
    pDiv.style.paddingTop = '17px';
    pDiv.setAttribute('data-js','letras-palavra');

    let nodes = palavraEmFormacao.map(letra => {
        let lDiv = document.createElement('div');
            lDiv.style.display ='inline-block';
            lDiv.style.width = '23px';
            lDiv.style.height = '20px';
            lDiv.style.marginLeft = '15px';
            lDiv.style.paddingLeft = '7px';
            lDiv.textContent = letra;
            if(letra === "\u005F"){
                lDiv.style.color= 'transparent';
            }
            pDiv.append(lDiv);
            return pDiv;
    });

    const wordsExist = document.querySelector('[data-js="letras-palavra"]');
    if(wordsExist) {
        wordsExist.remove();
    }

    dconteudo.append(...nodes);

    if(acertos === palavraEscolhida.length) {
         dresultado.textContent = 'Voce Ganhou';
    }
}

formarPalavra();
letrasEncontradas = {};

document.onkeyup = e => {

    for (let letter of letrasErradas.concat(letrasCertas)) {
            if (e.key.toUpperCase() === letter) {
                console.log('Já foi digitada');
                return null;
            }
        }
        for (let [index, letter] of Object.entries({...array})) {

            if (e.key.toUpperCase() === letter) {
                acertos += 1;
                letrasCertas.push(letter);
                letrasEncontradas[index] = letter;
                comparaLetra(letrasEncontradas);
            }
        }

        if (!letrasCertas.includes(e.key.toUpperCase())) {
            letrasErradas.push(e.key.toUpperCase());
            erradas.innerHTML = letrasErradas.join('  ');
            erros += 1;
        }

        if (erros === 6){
            dresultado.textContent = 'Fim de Jogo';
            return null;
        }
}


