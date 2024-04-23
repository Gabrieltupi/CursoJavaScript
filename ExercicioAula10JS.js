var operacao={  
    '+':function(a,b){a+b},
    '-':function(a,b){a-b},
    '*':function(a,b){a*b},
    '/':function(a,b){a/b},
    '%':function(a,b){a%b}
}

function ehValido(operador){
    return operacao[operador]!==undefined;
}

function calculadora(operador){
    if(ehValido(operador)){
        return 'operador'+false;
    }
    return function(a,b){
        if(typeof a!== 'number'|| typeof b!=='number'){
            return false;
        }
        return operacao [operador](a,b);
    }
};
 var nome= 'gabriel';
 console.log(nome)