const quadrados = document.getElementsByClassName("quadrado");
let jogador = null;
const jogadorSelecionado = document.getElementById("jogadorSelecionado");
const vencedor = document.getElementById('vencedor');



const mudaJogador = (valor) => {
    jogador = valor;
    jogadorSelecionado.innerHTML = "Jogador: "+jogador;

};

mudaJogador('X');

const quadradoSelecionado = (id) => {
    const quadrado = document.getElementById(id);

    if (quadrado.innerHTML != '-') return;

    quadrado.innerHTML = jogador;
    quadrado.style.color = "black";

    if (jogador === 'X') jogador ='O';
    else jogador = 'X';

    mudaJogador(jogador);
    checarVencedor();

};

const checarVencedor = () =>{
    const quadrado1 = document.getElementById('1');
    const quadrado2 = document.getElementById('2');
    const quadrado3 = document.getElementById('3');
    const quadrado4 = document.getElementById(4);
    const quadrado5 = document.getElementById(5);
    const quadrado6 = document.getElementById(6);
    const quadrado7 = document.getElementById(7);
    const quadrado8 = document.getElementById(8);
    const quadrado9 = document.getElementById(9);

    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCor(quadrado1, quadrado2, quadrado3);
        return;
    };

    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCor(quadrado4, quadrado5, quadrado6);
        return;
    };

    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCor(quadrado7, quadrado8, quadrado9);
        return;
    };

    if(checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCor(quadrado1, quadrado4, quadrado7);
        return;
    };

    if(checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCor(quadrado2, quadrado5, quadrado8);
        return;
    };

    if(checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCor(quadrado3, quadrado6, quadrado9);
        return;
    };

    if(checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCor(quadrado1, quadrado5, quadrado9);
        return;
    };

    if(checarSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCor(quadrado3, quadrado5, quadrado7);
        return;
    };

    
};

const checarSequencia = (quadrado1, quadrado2, quadrado3) => {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        vencedor.innerHTML = "Vencedor: "+ quadrado1.innerHTML;
        alert("Parabéns "+quadrado1.innerHTML+"!!! você venceu!");
        eigual = true;
        return eigual;
    };
};

const mudarCor = (quadrado1, quadrado2, quadrado3) => {
    quadrado1.style.background = "lightgreen";
    quadrado2.style.background = "lightgreen";
    quadrado3.style.background = "lightgreen";
};

const reset = () =>{
    vencedor.innerHTML = "Vencedor: ";
    mudaJogador("X");
    for (i=1;i <=9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = "cadetblue";
        quadrado.style.color = "cadetblue";
        quadrado.innerHTML = '-';
    };
}