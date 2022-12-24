let tela = document.querySelector('#tela');
let pincel = tela.getContext('2d');
pincel.fillStyle = 'white';
pincel.fillRect(0,0,600,330);

export let desenhaBase = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(250,300);
    pincel.lineTo(350,300);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaPost = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300,300);
    pincel.lineTo(300,100);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaPostCima = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300,100);
    pincel.lineTo(350,100);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaPostBaixo = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,100);
    pincel.lineTo(350,130);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaCabeca = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,130);
    pincel.beginPath();
    pincel.arc(350,150,20,0,2 * Math.PI);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaTronco = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,170);
    pincel.lineTo(350,230);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaBracoDireito = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,170);
    pincel.lineTo(330,220);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaBracoEsquerdo = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,170);
    pincel.lineTo(370,220);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaPernaDireita = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,230);
    pincel.lineTo(330,270);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let desenhaPernaEsquerda = () => {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(350,230);
    pincel.lineTo(370,270);
    pincel.lineWidth = 4;
    pincel.stroke();
}
export let finalMessage = (message, color) => {
    pincel.font = '18px Montserrat';
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.fillText(message, 380,200,200);
}
export let apagarTela = () => {
    pincel.clearRect(0,0,tela.width, tela.height);
}
