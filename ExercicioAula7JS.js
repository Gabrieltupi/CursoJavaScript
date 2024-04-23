var arr= ['gabriel', 24, function falar(palavras){return palavras}, {relogio:'verde'}, true];

function addItem(adicao){
    arr.push(adicao);
    return console.log('item '+adicao+' adicionado ao array');
}
addItem('qual vai ser');

var chato=['mais um', function encherLinguica(){return 'enchendo linguiça'}, 'é isso bb ta certa']

addItem(chato);
console.log(arr[6])

var contador=10;
while (contador<=20){
    if (contador%2===0){
        console.log(contador)
    }
    contador++;
}

for(var i=100;i<=120;i++){
    if(i%2===0){
        console.log(i);
    }
}