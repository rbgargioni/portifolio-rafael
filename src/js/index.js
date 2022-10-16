/*
Quando clicar na aba temq que aparecer o conteudo
*/

// passo 1 - dar um jeito pe pegar os olementos que representão as barras no HTML

const abas = document.querySelectorAll(".aba");


//Passo 2 - Dar um jeito de identificar click no elemento

abas.forEach(aba =>{
    aba.addEventListener("click", function(){
        //if para não rodar o codigo abaixo se clicar na aba já clicada (ele testa se for true ele retorna)
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);
        
      
    });
}); //forEach = para cada elemento

function selecionarAba(aba){
    //passo 3 - quando o usuario clicar desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");// ("Selecionado") é a classe selecionada

    // Passo 4 - Marcar aba clicada ("Selecionado") é a classe selecionada
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
      // Passo 5 - esconder o conteudo aterior      //(document.queryselect está no proprio html)
      const inforrmacaoSelecionada = document.querySelector(".informacao.selecionado"); //somente mostra a informação quando selecionada
      inforrmacaoSelecionada.classList.remove("selecionado");

      // Passo 6 - mostrar o proximo conteudo
      const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
      
      const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
      informacaoASerMostrada.classList.add("selecionado");
}