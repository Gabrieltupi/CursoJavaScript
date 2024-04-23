(function(win, doc){
    'use strict'

    //FORMA DE CABEÇALHO MAIS DINAMICO
    function DOM(elements){
        this.elements=document.querySelectorAll(elements);
    };



    DOM.prototype.on=function(eventType,callback){
        this.elements.forEach(function(element){
            element.addEventListener(eventType,callback);
        });
    };

    DOM.prototype.off=function(eventType,callback){
        this.elements.forEach(function(element){
            element.removeEventListener(eventType,callback);
        });
    };


    

    DOM.prototype.get=function(){
        return this.elements;
    };

    DOM.prototype.forEach=function(callback){
        this.elements.forEach(callback);
    };
    DOM.prototype.map=function(callback){
        return Array.prototype.map.call(this.elements,callback);
    };
    DOM.prototype.filter=function(callback){
        return Array.prototype.filter.call(this.elements,callback);
    };
    DOM.prototype.reduce=function(callback,initialValue){
        return Array.prototype.reduce.call(this.elements,callback,initialValue);
    };
    DOM.prototype.reduceRight=function(callback,initialValue){
        return Array.prototype.reduceRight.call(this.elements,callback,initialValue);
    };
    DOM.prototype.every=function(callback){
        return Array.prototype.every.call(this.elements,callback);
    };
    DOM.prototype.some=function(callback){
        return Array.prototype.some.call(this.elements,callback);
    };


    DOM.isArray=function(obj){
        return Array.isArray(obj);
    };
    DOM.isObject=function(obj){
        return obj !=null &&typeof obj==='object';
    };
    DOM.isNumber=function(obj){
        return typeof obj==='number'&& !isNaN(obj);
    };
    DOM.isString = function(obj){
        return typeof obj === 'string';
    };
    
    DOM.isBoolean = function(obj){
        return typeof obj === 'boolean';
    };
    
    DOM.isNull = function(obj){
        return obj === null;
    };




    var $a = new DOM('[data-js="link"]');
$a.forEach(function(element){
    console.log(element.firstChild.nodeValue);
});

var numbers = $a.map(function(element){
    return parseInt(element.innerText);
});
console.log(numbers);

var evenElements = $a.filter(function(element){
    return parseInt(element.innerText) % 2 === 0;
});
console.log(evenElements);

var sum = $a.reduce(function(acc, element){
    return acc + parseInt(element.innerText);
}, 0);
console.log(sum);

var hasChildren = $a.some(function(element){
    return element.children.length > 0;
});
console.log(hasChildren);

var isString = DOM.isString("Hello");
console.log(isString);

var isNumber = DOM.isNumber(42);
console.log(isNumber);

    /*e nesse novo jeito, nós podemos ja atribuir ao DOM e tudo mais,
    funções padrao, como exemplificado de forma simples acima*/

    //PODE SER CONSIDERADO cabeçalho tbm, pois ainda é configuração do DOM
    // var $a = new DOM('[data-js="link"]');
    // $a.on('click',function(e){
    //     e.preventDefault();
    //     console.log('clicou');
    // });


    // console.log('Elementos selecionados: ', $a.get());
    // console.log('$a é filho de body?', $a.get()[0].parentNode===document.body);


})(window,document);