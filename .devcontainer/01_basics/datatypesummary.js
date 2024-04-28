//primitive
//7 types = string,number,boolean,null,undefined,symbol,bigInt

//Refrence type(non primitive)
//array,objects,functions

//symbol usage


/*
const id=Symbol("123")
const id2=Symbol("123")
console.log(id==id2)

//array declaration
const sagar =[developer,android ,software,kotlin,js,node_js,]

//object declaration
let myobj={
    name:"sagar",
    age:21
}

//here we can assign a function to a variable too
const myFunc= function(){
    console.log("hello world!")
}
*/
//datatypes they return are

/*
string->string
boolen->boolean
number->number
null->object
undefined->undefined
symbol->symbol
big int->bingint

array-> array
object->object
function->function
*/

///////////////////////////////////////////////////////////////////////
//stack and heap
/*stack (primitive) && heap(non primitive)
*/

//primitive datatype
let name ="sagar"
let name2= name
console.log(name2)
name2="ram"
console.log(name)

//non primitive

let obj1={
    age :20,
    city :"hetauda"
};
let obj2={
    age:22,
    city:"hetauda"
};
console.log(obj1.age);
console.log(obj2.age);

let obj3=obj2
obj3.age=30
obj3.city="kathmandu"

console.log(obj2.age)




