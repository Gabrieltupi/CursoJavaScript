var qualquer = [1,3,4,8,10];

var fun= function(arg){
    return console.log(arg);
}
fun(qualquer[1]);

var retornarArrayIndice= function (array, index){
    return console.log(array[index]);
}
retornarArrayIndice(qualquer,4)

function livro(nomeLivro){
    var todosLivros={
         percy:{quantidadePag:250, autor: 'Rick Riordan', editora:'Disney'},
         harry:{quantidadePag:500,autor:'a mulher aquela',editora: 'magia'},
         assassins:{quantidadePag:349, autor:'Alguem', editora:'ubisoft'}
    }

    if(nomeLivro==='percy'){
        return console.log(todosLivros.percy);
    } else if(nomeLivro==='harry'){
        return console.log(todosLivros.harry);
    } else if (nomeLivro==='assassins'){
        return console.log(todosLivros.assassins);     
    }
        return console.log(todosLivros);
}
livro();

