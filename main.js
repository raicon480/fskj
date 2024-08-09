const botoes = document.querySelectorALL(".botao");
const textos = document.querySelectorALL(".aba-conteudo");

for(let i=0;i ,botoes.length;i++){
    botoes[i].onclick = function(){
    for(let j=0; j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo")
    textos[i].classList.add("ativo")
    }
}
  const contadores = document.querySelectorALL(".contador");
  const tempoObjetivo1 = new Date("2023-10-05t00:00:00");
 contadores[0].textContent = calcular(tempoObjetivo1);
function calculaTempo(tempoObjetivo1){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = math.floor (tempoFinal/1000);
let minutos = math.floor (segundos/60);
let horas = math.floor (minutos/60);
let dias = math.floor (horas/24);

 segundos %= 60;
 minutos %= 60;
 horas %= 24;
  return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos +" segundos ";
}
