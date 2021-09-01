/*
carne - 350g por pessoa          +6h = 650
cerveja = 1200ml por pessoa      +6h = 2000ml
refri/agua = 1000ml por pessoa   +6h = 1500ml
*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular () {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carneTotal = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let cervejaTotal = cervaPP(duracao) * adultos;
    let bebidaTotal = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2) * criancas;
    
    
    resultado.innerHTML = `<p> <img src="./assets/meat.png">${carneTotal}g de Carne`;
    resultado.innerHTML += `<p> <img src="./assets/cerveja.png">${cervejaTotal}ml de Cerveja`;
    resultado.innerHTML += `<p> <img src="./assets/refri.png">${bebidaTotal}ml de Refri/Agua`;
}

function carnePP (duracao){
    if (duracao >= 6){
        return 650
    } else {
        return 350
    }
}

function cervaPP (duracao){
    if (duracao >= 6){
        return 2000
    } else {
        return 1500
    }
}

function bebidaPP (duracao){
    if (duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}
