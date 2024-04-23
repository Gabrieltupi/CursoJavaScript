obj={};

obj.x=1;
obj.y=2;
// console.log(obj);

obj2={};
obj2= Object.create(obj);
// console.log(JSON.stringify(obj2));



var person= {
    nome: 'gabriel',
    sobrenome: 'souza',
    idade: 24
};

console.log(Object.keys(person));

var books=[];
books.push({name:'livro', pages:'250'})
books.push({name:'coco', pages:'500'})

console.log(books.pop()) 
console.log(JSON.stringify(books))

for (var prop in books){
    console.log(books[prop]);
}


var arr= [1,2,3,4,5];
var map= arr.map(function(ite, inde, arra){
    return console.log({index:inde, item:ite});
});

var filter= arr.filter(function(ite, inde, arra){
    return console.log(ite>2);
});