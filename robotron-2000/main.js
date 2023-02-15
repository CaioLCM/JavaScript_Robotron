const pecas = document.querySelectorAll(".controle-ajuste")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const robo = document.querySelector(".robo")
const robos = [
     "img/razul.png",
     "img/rpreto.png",
     "img/rrosa.png",
     "img/rvermelho.png",
     "img/robotron.png"
]
let contador = 0;
const atributos = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

pecas.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        action(elemento.innerHTML, elemento.parentNode)
        atualizaDados(elemento.dataset.peca)
    })
})

function action(acao, controle)  {
    const valor = controle.querySelector(".controle-contador")
    if (acao === "+"){
        valor.value = parseInt(valor.value) + 1
    }
    if (acao === "-" && valor.value != "0" && valor.value != "00"){
        valor.value = parseInt(valor.value) - 1
    }
}

function atualizaDados(peca){
    estatisticas.forEach(  (elemento) => {
        elemento.innerHTML = parseInt(elemento.innerHTML) + parseInt(atributos[peca][elemento.dataset.estatistica])
    })
}

robo.addEventListener("click", () => {
    robo.src = robos[contador]
    contador ++
    if (contador >= robos.length){
        contador = 0
    }
})