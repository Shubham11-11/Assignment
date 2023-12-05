

// 1. what is the output of the snippet of the code.
// function foo() {
//     x = 1;
//     function x() { }
//     var x = '2';
//     return x;
// }
// alert( typeof foo() );


// executing the code
function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
console.log( typeof foo() );



////////////////////////////////////////////


// 2. What is the output of the snippet of the code.
// function foo() {
//     return x;
//     x = 1;
    
//     function x() { }
    
//     var x = '2';
// }
// console.log( typeof foo() ); 



// executing the code
function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() ); 


//////////////////////////////////////////////


// 3. What is the output of the snippet of the code.
// var x = 1;
// function foo() {
//     x = 10;
//     return;
//     function x() {}
// }
// foo();
// console.log( x );


// executing the code
var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );


//////////////////////////////////////////