//object using constructor method (singleton)

const tinderuser=new Object()//while the both may look same but first one is singleton i.e its one of its kind
const tinderuser2={}//but the second     i.e this one is not singleton i.e we can have multiple instances of it
tinderuser.id=101
tinderuser.name="sagar"

// console.log(tinderuser);
// console.log(tinderuser2);

const regularuser={
    email:"sagar@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sagar",
            lastname:"sagar"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);



//merging objects 
//method 1= using target source method
const obj1={1:"a" ,2:"b",3:"c"}
const obj2={4:"d" ,5:"e",6:"f"}
const obj3={7:"g" ,8:"h",9:"i"}
const obj4=Object.assign({},obj1,obj2,obj3)
//console.log(obj4);

//method 2 //its same as we merge arrays
const obj5={...obj1,...obj2,...obj3}
//console.log(obj5);


//when the data comes from the database in the form of objects its generally an array of objects like
const arobj=[
    {
        email:"sagar@gmail.com",
        id:101
    },
    {
        id:102,
        email:"bikram@gmail.com",
    },
    {

    },
    {

    },

]
console.log(arobj[1].email);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));

//check if the key u are searching even exists in the object
console.log(obj4.hasOwnProperty(100));