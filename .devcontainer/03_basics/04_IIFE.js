//Immediately Invoked Function Expression
//iife is used when we wnat to to execute the function immediately when the application starts
// iife creates an barrier which protects the variables to be polluted from global variables

//there are mainly two types of iife functiona
//named iife function
(function namedfun() {
    console.log("DB CONNECTED");
    
})();//here we must declare the end of code using ;(semicolon)


((num1,num2)=>{
    console.log(`${num1+num2}`); 
})(5,5);

