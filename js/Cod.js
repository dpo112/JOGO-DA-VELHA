var person1 = prompt("Jogador 1:");
var person2 = prompt("Jogador 2:");

$(function(){
    var vez = 1;
    var vencedor = "";  

    //*Função para verificar preenchimento de uma fila
    function casasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("1.png") >= 0)
            vencedor = person1;
        else
            vencedor = person2;
        return true;
    }
    else{
        return false;
    }
}
    
//*Função para verificar o fim do jogo
function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
        $("#resultado").html("<h1>" + vencedor + " venceu! </h1>");
        $(".casa").off("click");
    }
    placar();
}
    
    
//*Evento click das casas
$(".casa").click(function(){
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "")
    {           
        var fig = "url(" + vez.toString() + ".png)";
        $(this).css("background", fig);
        vez = (vez == 1? 2:1);  
        verificarFimDeJogo();
    }
});
});

function placar(){
    let p = document.querySelector("#placar");
    p.innerHTML = "Jogador 1: " +person1 + "<br>" + "Jogador 2: " + person2}
    