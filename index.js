console.log(a); // a() {}
var a = 0;
console.log(a);  // a = 0
if (true) {
    console.log(a); // a = 0
    a = 1;          // a = 1 

    function a() {}
    console.log(a);
    a = 21;         // a = 21 

    // window.a = 21; 

    console.log('after 21', a);  // a = 21 
} 
console.log('end', a);  // a = 21 




var a = 10
if(true){
    console.log('a1', a)
    a = 20
    function a(){}
    a = 1
    console.log(a)
}

console.log('a2', a)


var a = 10
if(true){
    console.log('a1', a)
    function a(){}
    a = 1
    console.log(a)
}

console.log('a2', a)