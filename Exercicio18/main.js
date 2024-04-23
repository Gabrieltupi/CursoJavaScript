(function(win, doc){
    'use strict'

    var $inputNome= doc.querySelector('input[type="text"]');
    var username= prompt("qual seu nome?");
    if(username===null||username===""){
        username="desconhecido";
    };
    alert("bem-vindo, "+username);
    $inputNome.value=username;

    var $inputEmail= doc.querySelector('input[type="email"]')
    var email=prompt("qual seu email?")
    if(email===null|| email===''){
        email='invalido';
    };
    alert("email registrado "+email);
    $inputEmail.value=email;

    var $inputMensagem= doc.querySelector("textarea");
    var $inputBotao=doc.querySelector("button");

    $inputBotao.addEventListener('click',function(){
        event.preventDefault();

        
        if(!$inputNome.value){
            return alert('nome invalido, digite algo');
        }
        if(!$inputEmail.value){
            return alert('email invalido');
        }
        if(!$inputMensagem.value){
            return alert('digite alguma mensagem');
        }
        if(!isValidEmail($inputEmail.value)){
            return alert('entre com um email valido');
        }
        if(!confirm('quuer contiuar com o envio do formulario?')){
            return alert('nao enviado')
        }
            return alert('enviado com sucesso');

            function isValidEmail(email){
                var emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9_]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{0,2})?$/;
                return emailRegex.test(email);
            };
    },false);

})(window, document);
