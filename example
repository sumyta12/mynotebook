
// const root = React.createElement('h1',
// {
//     'className' : 'heelo',
    
// },

// 'hello world',' hi');

// const somethiing = ReactDOM.createRoot(document.getElementById('root'));

// somethiing.render(root);


// ///second class this about this


// function text()
// {
//     console.log(this)
// }
// text();


// const textthow = () =>{
//     console.log(this)

// }
// textthow();



// const prople = {
//    name : 'jankok',
//    anyfunction : function (){
//     console.log(this);
//    }
    
// }

function Product(name,price){
   console.log(name,price);
}
function food(name,price){
    Product.call(this,name,price);
}


food('rice',22)

console.log(eval('({ foo : 123})'))
//Uncaught SyntaxError: Function statements require a function name 
//function () { return 'abc'}

function foo(){ return 'abc'}

console.log(Object)
//if(Object != null) Object.foo();


// function s(){
//     'use strict';
//     a = 2 ;
//     console.log(a)
// }

// s()
// //index.js:63 Uncaught ReferenceError: a is not defined


function calling(){
    
    console.log( this,this.anima, 'see' ,this.duration)
}

const obj = {
    anima : 'cat',
    duration : '11 - 2pm',
    a : function s(){
        console.log(this)
    }
}
obj.a()
calling.call(obj)



function food(name){
    console.log(name.name)
}
const foodname = {
    name: 'foodone',
}
food(foodname);
