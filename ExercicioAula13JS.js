console.log([1,2,3,4,5,6])
//criando um array de objetos q tem numeros dentro
var numerosObjetos=[];
for(var i=1;i<=10;i++){
    numerosObjetos.push({number:i})
}
console.log(numerosObjetos)


//array de numeros
var somenteNumeros= numerosObjetos.map(function(item){
    return item.number;
});
console.log(somenteNumeros);

var numerosDivisiveis= somenteNumeros.filter(function(item){
    return item%2===0 || item%3===0;
})
console.log(numerosDivisiveis);


var obj={
    nome:'gabriel',
    idade:24,
    algo:'sim'
}

console.log(Object.entries(obj))