function user() {
    
    username="sagar"
    age=20;

    welcomeMessage = function() {

       console.log( `${this.username} just logged in`);
        
    }
     welcomeMessage()
}
user()


//lets try function inside an object

const user2={
    username:"bikram",
    price:999,

    welcomeMessage: function () {

        console.log(`${this.username} just logged in`);
        console.log(this);//here it will print the whole context of the object user2
    }
}

//user2.welcomeMessage()

//console.log(this);//it will simply print an empty object


//this inside a function

function coffee() {

    let username5="shamey"
    console.log(this.username5);//it will give an undefined error because the this keyword here refers to the global objectrather then the local context ,it refers to global context
    //and since we dont have username5 at global scope we get the undefined error,its not the case with object 
    //this discriminatory behaviour between object and function is due to the early mindset of reusing function over and over 
   // console.log(this);
    
}
coffee()



///////////////////////////////////////////// arrow functions////////////////////////////////////////////////

const arfun1= ()=>{
    let username3="hari"
    console.log(this.username3);
    console.log(this);//just like we declared or printed in global scope this keyword is giving {} empty object in arrow function which is interesting 
    //cause it was the not the case in normal function
}
arfun1()

//techniques of using arrow functions in js
//note: arrow function is always stored in an variable

const arfun2 =(num1,num2)=>{
    return num1+num2
}
console.log(arfun2(10,20));

//we can also use an explicit method werer we dont require a return keyword

const arfun3=(num1,num2)=> (num1+num2)//remember that if we use parenthesis() we dont need to write return key word
//but if we r using {} we need to write return keyword
//another interesting point ot consider is that thanks to () we can return objects implicitly in the arrow function simply by wrapping in ({})

console.log(arfun3(40,40))