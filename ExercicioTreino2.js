var carro= {
    marca: 'Fiat',
    modelo: 'Palio',
    placa: 'IPW1O15',
    ano: 2010,
    cor: 'bege',
    quantasPortas: 5,
    assentos: 5,
    quantidadePessoas: 0
}


carro.mudarCor= function(cor){
    this.cor= cor;
    return 'cor alterada com sucesso. a cor agora é: '+this.cor;
}

console.log(carro.mudarCor('verde'));

carro.obterCor= function(){
    return console.log(carro.cor)
};
carro.obterCor();

carro.obterModelo= function(){
    return console.log(carro.modelo)
}
carro.obterModelo();

carro.obterMarca= function(){
    return console.log(carro.marca)
}
carro.obterMarca();

carro.adcPessoas= function(numero){
    if (this.quantidadePessoas+numero>this.assentos){
        var qntsPodem= this.assentos - this.quantidadePessoas;
        return 'não é possivel adicionar mais pessoas que a capacidade do carro, são apenas '+this.assentos+ ' e só temos '+qntsPodem+' lugares disponiveis.';
    } 
    carro.quantidadePessoas= carro.quantidadePessoas+numero;
    return 'no carro há '+this.quantidadePessoas;


}
console.log(carro.adcPessoas(3));
console.log(carro.adcPessoas(2));
