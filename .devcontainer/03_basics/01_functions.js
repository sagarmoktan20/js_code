//functions in js is very simple we dont even need to specify the datatype of the parameters like in c/c++
//thats soo cool

function Name() {
    console.log("s");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("r");
    
}
//Name alone is called refrence of the function but Name() is function call
Name()

function addition(num1,num2) {
    console.log(num1+num2);
}

addition(5,5)
addition(5,"g")
addition("g","g")
//addition(g,g)//it shows error

//unlike c/c++ js allows the functions to be stored in a variable too,which is such a cool feature


const result=function multiply(num1,num2) {
    return num1*num2
}

console.log("result:",result(5,5));



function loggedin(usernmae="user") {//we can also give a default value which is overwritten in case of not value passed as arguement
    if(usernmae==undefined){
        console.log("please enter the username");
    }
    return `${usernmae} just logged in`
    
}
console.log(loggedin("sagar"));
console.log(loggedin());//surprisingly it printed undefined just logged ,i was expecting null btw


//function with infinite arguements 
//suppose u are making a function for a cart of an ecommerce app,
//here u dont know the number of items that may select and insert to cart 
//to keep track of every item the user select we have to calculate the total amount

function cartTotalAmount(...num) {//here ...num1 is called rest operator,its same as spread operator used in array and objects
    return num
    
}

console.log(cartTotalAmount(100,56,489,399,4992,483,500));//it simply return all the values inside an array[344,34,34,]



//we can also pass objects in the function which is also very very interesting concept

const obj1={
    name:"sagar",
    age:18
    
}

function handleobject(anyobject) {//we have to make sure that the property of the object which we are reffering does exist in the object ,it may give error 
    //that is why people use typescrypt to avoid these types of error

    return `${anyobject.name} just logged in who is ${anyobject.age} years old`
    
}

console.log(handleobject(obj1));


//we can also pass arrays in the functions

const array1=["sagar","is","a","software","engineer"]

function arrayhandler(anyarray) {
    
    return  `${anyarray[0]}=${anyarray[4]}`
}

console.log(arrayhandler(array1));