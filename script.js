let tamanho;
let pauta;
let folhas;
let pedido;
let valortamanho;
let valorpauta;
let valorfolhas;
let valortotal;
let nome;
let endereço;
let tamanhos;
let nomepauta;
let nomefolhas;

function selecionar(tamanhoselecionado){
    tamanho = document.querySelector(".selecionar");
        if(tamanho !== null){
        tamanho.classList.remove("selecionar");
        }
        tamanhoselecionado.classList.add("selecionar");
        if(tamanho !== undefined && pauta !== undefined && folhas !== undefined){
            const botao01 = document.querySelector(".botao1");
            botao01.classList.add("esconder");
            const botao02 = document.querySelector(".botao2");
            botao02.classList.remove("esconder");
        }
    }
function selecionarpauta(pautaselecionado){
    pauta = document.querySelector(".selecionarpauta");
    if(pauta !== null){
        pauta.classList.remove("selecionarpauta");
    }
    pautaselecionado.classList.add("selecionarpauta");
    if(tamanho !== undefined && pauta !== undefined && folhas !== undefined){
        const botao01 = document.querySelector(".botao1");
        botao01.classList.add("esconder");
        const botao02 = document.querySelector(".botao2");
        botao02.classList.remove("esconder");
    }
}

function selecionarfolhas(folhasselecionada){
    folhas = document.querySelector(".selecionarfolhas");
    if(folhas !== null){
        folhas.classList.remove("selecionarfolhas");
    }
    folhasselecionada.classList.add("selecionarfolhas");
    if(tamanho !== undefined && pauta !== undefined && folhas !== undefined){
        const botao01 = document.querySelector(".botao1");
        botao01.classList.add("esconder");
        const botao02 = document.querySelector(".botao2");
        botao02.classList.remove("esconder");
    }
}
function fecharpedido(){
    pedido = document.querySelector(".fecharpedido");
    pedido.classList.remove("esconder");
    tamanhos = document.querySelector(".caixa .selecionar h2").innerHTML;
    nomepauta = document.querySelector(".caixa .selecionarpauta h2").innerHTML;
    nomefolhas = document.querySelector(".caixa .selecionarfolhas h2").innerHTML;
    valortamanho = document.querySelector(".caixa .selecionar h3").innerHTML.replace(",",".").replace("R$","");
    valorpauta = document.querySelector(".caixa .selecionarpauta h3").innerHTML.replace(",",".").replace("R$","");
    valorfolhas = document.querySelector(".caixa .selecionarfolhas h3").innerHTML.replace(",",".").replace("R$","");
    tamanho = document.querySelector(".fecharpedido .tamanhoconfirmado h2");
    tamanho.innerHTML = `- Tamanho: ${tamanhos} R$${valortamanho}`;
    pauta = document.querySelector(".fecharpedido .pautaconfirmada h2");
    pauta.innerHTML = `- Pauta: ${nomepauta} R$${valorpauta}`;
    folhas = document.querySelector(".fecharpedido .folhasconfirmado h2");
    folhas.innerHTML = `- Folhas: ${nomefolhas} R$${valorfolhas}`;
    valortotal = document.querySelector(".fecharpedido .valortotal h2");
    valortotal =`Total: R$ ${(Number(valorpauta) + Number(valortamanho) + Number(valorfolhas)).toFixed(2)}`;
}
function fechar(){
    nome = prompt("Informe seu nome");
    endereco = prompt("Informe seu endereço");
    const mensagem = `Olá, gostaria de fazer o pedido:
    - tamanho: ${tamanhos}
    - Bebida: ${nomepauta}
    - folhas: ${nomefolhas}
    Total: R$ ${(Number(valorpauta) + Number(valortamanho) + Number(valorfolhas)).toFixed(2)}

    -Nome: ${nome}
    -Endereço: ${endereco}`
    window.open(`https://wa.me/5587981654397?text=${encodeURIComponent(mensagem)}`)
}
function cancelar(){
    pedido = document.querySelector(".fecharpedido");
    pedido.classList.add("esconder");
}