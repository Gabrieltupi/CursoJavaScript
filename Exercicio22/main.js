var gabriel={
    name:'gabriel',
    lastName:'souza'
}
var eduarda={
    name:'eduarda',
    lastName:'alguma'
}

function getFullName(){
    return this.name+' '+this.lastName;
}
console.log(getFullName.apply(gabriel));
console.log(getFullName.call(eduarda)); 


function soma(){
    console.log("parametros passados aqui: "+ Array.from(arguments) );
    var arrayArgs= Array.from(arguments);
    var total=0;
    arrayArgs.forEach(function(element) {
        if (!isNaN(element)) { 
            total += element;
        }
    });
    return total;
};

console.log(soma(1,2,3, 'lambari'));
console.log(soma(12,15,7,8,10,1));