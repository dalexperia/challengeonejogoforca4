export let binitButton = document.querySelector("#init-button");
export let binsertWord = document.querySelector("#insert-word");
export let bNewGame = document.querySelector("#new-game");

binitButton.onclick= () => {
    document.getElementById("canvas").style.display = "block";
    document.querySelector("#palavra").style.display = "block";
    document.querySelector("#insert-word").style.display = "none";
    document.querySelector("#buttons-game").style.marginTop = "50px";
    binitButton.style.display = "none";
}