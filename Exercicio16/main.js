function Person(name, lastName, age){
    'use strict';
    this.name=name;
    this.lastName=lastName;
    this.age=age;

    this.getFullName=function getFullName(){
        return console.log(this.name+' '+this.lastName);
    };
    this.getAge=function getAge(){
        return console.log(this.age);
    };
    this.addAge = function addAge(numero){
        this.age += numero; 
        return console.log(this.age);
    };
};

var gabriel= new Person('gabriel','souza',24);
var joao= new Person('joao','alves',21);
var julia= new Person('julia','folharini',22);


joao.addAge(2);

