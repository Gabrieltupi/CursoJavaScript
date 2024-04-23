(function(win,doc){
    'use strict'

    var $a= doc.querySelector('[data-js="link"]');
    var $div= doc.querySelector('[data-js="div"]');

    $div.addEventListener('click', function(){
        alert('divooo');
    }, false);
    $a.addEventListener('click',function(){
        event.preventDefault();
        alert('aaaaa');       
    },false);

})(window,document);