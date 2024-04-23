var gabriel= 'gabriel';
for(var i=0; i<gabriel.length; i++){
    console.log(gabriel.charAt(i));
};


var fullName= gabriel+'-souza';
var mewFull=fullName.split('-').map(function(name){
    return name.charAt(0).toUpperCase()+name.slice(1);
});
console.log(fullName);
console.log(mewFull.join(' '));



var nomes= ['gabriel','joao','arlindo','roger','maria'];
var nomesJuntos= nomes.join(', ');
var ultimoParam= nomesJuntos.lastIndexOf(', ');
var nomesJuntosComE= nomesJuntos.slice(0,ultimoParam)+ ' e '+nomesJuntos.slice(ultimoParam+1);
var nomesJuntosComE=nomesJuntosComE.replace('gabriel','gabriela');
var resultado= nomesJuntosComE.concat(' são meus amigos');
console.log(resultado);