var campeonato= 'gauchao';
console.log(campeonato);

var times= ['Internacional', 'Gremio', 'Juventude', 'Caxias', 'Ipiranga']
console.log(times)

var contador=20;
while(contador<=30){
    console.log(contador)
    contador++
}

function paraHexadecimal(color){
    switch(color){
        case 'vermelho':
            return 'o hexadecimal da cor '+color+' é ';
            break;
        case 'verde':
            return 'o hexadecimal da cor '+color+' é ';
            break;
        case 'azul':
            return 'o hexadecimal da cor '+color+' é ';
            break;
        case 'rosa':
            return 'o hexadecimal da cor '+color+' é ';
            break;
        default:
            return 'não há essa cor nos nossos dados';
            break;
    }

}

console.log(paraHexadecimal('vermelho'));