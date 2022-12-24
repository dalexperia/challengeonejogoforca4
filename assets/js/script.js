import {
    apagarTela,
    desenhaBase,
    desenhaBracoDireito, desenhaBracoEsquerdo,
    desenhaCabeca, desenhaPernaDireita, desenhaPernaEsquerda,
    desenhaPost,
    desenhaPostBaixo,
    desenhaPostCima,
    desenhaTronco, finalMessage
} from "./canvas.js";

import * as buttons from './buttons.js'
import {bNewGame} from "./buttons.js";

let words = ['amor','cadeira','telepatia'];
// let indice = Math.round(Math.random() * (words.length - 1));
// const palavraEscolhida = words[indice].toUpperCase();
// const array = palavraEscolhida.split('');

export let choiceWord = () => {
    let indice = Math.round(Math.random() * (words.length - 1));
    return words[indice].toUpperCase();
}

let letrasCertas = [];
let letrasErradas = [];
let erros = 0;
let acertos = 0;
let palavraEmFormacao = [];
let rPalavra = choiceWord();

console.log(rPalavra);
// Divs criadas para separa o conteúdo
let dTracos = document.querySelector('#tracos');
let dconteudo = document.querySelector('#conteudo');
let erradas = document.getElementById('erros');
export let formarPalavra = (palavra) => {
    let count = 1;
    // const tracosExist = document.querySelector('[data-traco="tracos-atuais"]');
    // if(tracosExist) {
    //     alert('entrou');
    //     tracosExist.remove();
    // }

    let pTraco = document.createElement('div');
    pTraco.style.display = 'block';
    pTraco.setAttribute('data-traco','tracos-atuais');

    while (count <= palavra.length){
        let cTracos = document.createElement('div');
            cTracos.style.display = 'inline-block';
            cTracos.style.borderTop = '4px solid black';
            cTracos.style.width = '32px';
            cTracos.style.height = '20px';
            cTracos.style.padding = '0px 1px';
            cTracos.style.marginLeft = '15px';
            pTraco.append(cTracos);
        palavraEmFormacao.push("\u005F");
        count += 1;
    }

    dTracos.append(pTraco);
}

formarPalavra(rPalavra);

export let comparaLetra = (obj) => {

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
            lDiv.style.width = '28px';
            lDiv.style.height = '20px';
            lDiv.style.padding = '0px 1px';
            lDiv.style.marginLeft = '19px';
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

    if(acertos === rPalavra.length) {
        let message = "Parabéns!!!";
        message += "\n";
        message += "Você ganhou";
        finalMessage(message, "green");
    }
}

export let letrasEncontradas = {};

let click = (e, palavra) => {
    console.log('Palavra em click: ' + palavra);
    for (let letter of letrasErradas.concat(letrasCertas)) {
            if (e.key.toUpperCase() === letter) {
                console.log('Já foi digitada');
                return null;
            }
        }
        const array = palavra.split('');
        for (let [index, letter] of Object.entries({...array})) {

            if (e.key.toUpperCase() === letter) {
                acertos += 1;
                letrasCertas.push(letter);
                letrasEncontradas[index] = letter;
                comparaLetra(letrasEncontradas);
            }
        }

        let dErros = document.createElement('div');
            dErros.style.display = "block";
            dErros.style.marginTop = '10px';
            dErros.style.fontFamily = 'MontSerrat Sans-Serif';
            dErros.style.fontSize = '18px';
            dErros.setAttribute('data-erros','letras-erradas');

        if (!letrasCertas.includes(e.key.toUpperCase())) {
            letrasErradas.push(e.key.toUpperCase());
            let nodeErros = letrasErradas.map(letra => {
                let cErro = document.createElement('div');
                    cErro.style.display = 'inline-block';
                    cErro.textContent = letra;
                dErros.append(cErro);

                return dErros;
            })

            const dErradas = document.querySelector('[data-erros="letras-erradas"]');
            if(dErradas){
                dErradas.remove();
            }
            erradas.append(...nodeErros);

            //erradas.innerHTML = letrasErradas.join('  ');
            // desenhaBase();
            erros += 1;
            switch (erros) {
                case 1: {
                    desenhaBase();
                    break;
                }
                case 2: {
                    desenhaPost();
                    break;
                }
                case 3: {
                    desenhaPostCima();
                    break;
                }
                case 4: {
                    desenhaPostBaixo();
                    break;
                }
                case 5: {
                    desenhaCabeca();
                    break;
                }
                case 6: {
                    desenhaTronco();
                    break;
                }
                case 7: {
                    desenhaBracoDireito();
                    break;
                }
                case 8: {
                    desenhaBracoEsquerdo();
                    break;
                }
                case 9: {
                    desenhaPernaDireita();
                    break;
                }
                case 10: {
                    desenhaPernaEsquerda();
                    break;
                }
            }
        }

        if (erros === 10){
            finalMessage('Fim de Jogo','red');
            return null;
        }
}

document.onkeydown = e => {
    click(e, rPalavra);
}

let apagarCaracteres = () => {

    letrasEncontradas = {};
    letrasCertas = [];
    letrasErradas = [];
    palavraEmFormacao = [];
    erros = 0;
    acertos = 0;

    const tracosExist = document.querySelector('[data-traco="tracos-atuais"]');
    const wordsExist = document.querySelector('[data-js="letras-palavra"]');
    const dErradas = document.querySelector('[data-erros="letras-erradas"]');

    if(tracosExist) {
        tracosExist.remove();
    }

    if(wordsExist) {
        wordsExist.remove();
    }

    if(dErradas){
        dErradas.remove();
    }
}

bNewGame.onclick = () => {

    apagarCaracteres();
    rPalavra = choiceWord();
    formarPalavra(rPalavra);
    apagarTela();
}