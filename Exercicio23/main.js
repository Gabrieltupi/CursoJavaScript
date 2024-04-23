(function(win,doc){
    'use strict'
//cabeçalho (atributos)
    var $visor=doc.querySelector('[data-js="visor"]');
    var $numerosBotoes= doc.querySelectorAll('[data-js="bot"]');
    var $operacoesBotoes=doc.querySelectorAll('[data-js="operacao"]');
    var numerosArray= Array.from($numerosBotoes);
    var operacaoArray=Array.from($operacoesBotoes);
    numerosArray.forEach(function(button){
        button.addEventListener('click',cliqueNumeros,false)
    });
    operacaoArray.forEach(function(button){
        button.addEventListener('click',direcionadorOperacao,false)
    });
    

//funções
    function cliqueNumeros(){
        if($visor.value==0){
            return $visor.value= this.value;
        }
        $visor.value+=this.value;
    }

    function direcionadorOperacao(){
        var operacoes=pegarOperadores();
        if(operacoes.includes(this.value)){
            verificadorUltimoCaractere(this);
        }
        if(this.value==="CE"){
            $visor.value=0;
            return;
        }
        if(this.value==="="){
            verificadorUltimoCaractere(this);
            realizarOperacao();
            return;
        }
        $visor.value+=this.value;
    };

    function pegarOperadores(){
        return operacaoArray.map(function(botao){
            return botao.value;
        })
    }

    function verificadorUltimoCaractere(botao){
      var operacoes=pegarOperadores();
      var ultimo=$visor.value.slice(-1);

      if (operacoes.includes(ultimo)&&botao.value==="="){
        return $visor.value=$visor.value.slice(0,-1);
      }

      if(operacoes.includes(ultimo)){
        $visor.value=$visor.value.slice(0,-1);
      }
    }

    function realizarOperacao(){
        var expressao=$visor.value;
        var resultado;
        expressao = expressao.replace(/x/g, '*').replace(/%/g, '/');

        resultado=eval(expressao);
        $visor.value=resultado;
    };

})(window,document);