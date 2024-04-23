(function() {
    return console.log('Esta é uma mensagem dentro da IIFE');
})();


function calculadora(a,b){
    return function(callback){
        return callback(a,b);
    };
}
var sum= calculadora(3,7);
var subtracao= calculadora(3,7);

console.log(  sum(function(a,b){
    return a+b;
})      );
console.log( subtracao(function(a,b){
    return a-b;
}));

