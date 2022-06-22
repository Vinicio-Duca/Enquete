var respostaSim = 0;
var respostaNao = 0;
function respSim(){
    respostaSim = respostaSim +1;
    document.getElementById("respostaSim").innerHTML = respostaSim;
    document.getElementById("respostaSim").style.width = respostaSim + "35px";
}
function respNao(){
    respostaNao = respostaNao +1;
    document.getElementById("respostaNao").innerHTML = respostaNao;
    document.getElementById("respostaNao").style.width = respostaNao + "35px";
}