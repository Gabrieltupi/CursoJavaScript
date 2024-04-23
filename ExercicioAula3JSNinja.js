var pessoa= {
    nome: 'Gabriel',
    Sobrenome: 'Souza',
    idade: 24,
    altura:1.78,
    peso: 70,
    andando: false,
    caminhouQuantosMetros: 0
}
pessoa.caminhar= function(x){
    if(this.andando==false){
        this.andando= true;
        this.caminhouQuantosMetros+=x;
        return pessoa.nome+ ' está caminhando, e a quantidade em metros é '+x;
    } else{
        this.caminhouQuantosMetros+=x;
        return pessoa.nome+ ' está caminhando, e a quantidade em metros é '+x;
    }
}
pessoa.parar= function(){
    if(this.andando==true){
        this.andando=false
        return pessoa.nome+' parou de caminhar, está parado';
    }
}
pessoa.aniversario= function(){
    this.idade++
    return pessoa.nome+ ' está fazendo aniversario, hoje faz '+ pessoa.idade;
}
pessoa.sobrenome= 'Souza';
pessoa.nomeCompleto= function(){
    return 'Oi eu sou '+pessoa.nome+' '+pessoa.sobrenome;
}
pessoa.mostrarIdade= function(){
    return 'Minha idade é '+this.idade;
}

console.log(pessoa.caminhar(10));
console.log(pessoa.caminhar(3));
console.log(pessoa.caminhouQuantosMetros);
console.log(pessoa.parar());
console.log(pessoa.aniversario());
console.log(pessoa.mostrarIdade());
console.log(pessoa);
console.log(pessoa.nomeCompleto());



