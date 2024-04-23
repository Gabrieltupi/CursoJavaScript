var sum= function calculateSum(a,b){
    return console.log(a+b);
};
sum(1,2);

function showName(){
    return 'gabriel souza';
}
var varShowName= showName;
console.log(varShowName.name+ ' '+varShowName())


function calculadora(operacao){
    return function calcular(a,b){
        var resultado;
        switch(operacao){
            case '+':
                resultado= a+b;
                break;
            case '-':
                resultado= a-b;
                break;
            case '*':
                resultado= a*b;
                break;
            case '/':
                resultado= a/b;
                break;
            case '%':
                resultado= a%b;
                break;
            default:
                return console.log('operacao invalida!')
        }

        return console.log('resultado de: '+a+operacao+b+' = '+ resultado);
    }
}
var soma= calculadora('+');
soma(10,2);
