(function(win,doc){
    'use strict';

    var $inputCronometro=doc.querySelector('input[type="text"]');
    var $buttonStart=doc.querySelector('[data-js="Start"]');
    var $buttonStop= doc.querySelector('[data-js="Stop"]');
    var $buttonReset=doc.querySelector('[data-js="Reset"]');
    var tempoAtual=0;
    var intervalID;


    $buttonStart.addEventListener('click',function(){
        intervalID=setInterval(function(){
            tempoAtual++;
            atualizarCronometro();
        },1000);
    },false);

    $buttonStop.addEventListener('click',function(){
        clearInterval(intervalID);
    },false);

    $buttonReset.addEventListener('click',function(){
        tempoAtual=0;
        atualizarCronometro();
    },false);

    function atualizarCronometro(){
        $inputCronometro.value=tempoAtual;
    }

    
})(window, document);