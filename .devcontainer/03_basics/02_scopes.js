//just like in c/c++ we have global and local scope in js


let a=200
var c=40
function scopetester() {
//everything declared inside a {} is called a local scope which is not accessed by external elements
    let a=10
    const b=20
    var c=30//var has a scope issue
    console.log(c);
    
}
console.log(a);
console.log(c);
scopetester()

if(true){
    var d=50
    console.log(c);
}
console.log(d);


//declarition of function in two ways 

console.log(addone(5));

function addone(num) {

    return num+1 //the classic num++ doesnt work here
    
}

//console.log(addtwo(5));//u see this method of calling function before function defination gives error

const addtwo=function (num) {

    return num+2
    
}
console.log(addtwo(5))//but if u call the same function after the function defination it will not give an error