//objects in js
//we have mainly two ways of declaring objects in js : using literals ,using constructors(singleton)


//object using literals
//objects in js
//object creation methods : constructor ,literals


//objects.create  (this is a constructor method)(singleton)

const mysym=Symbol("key1")

const jsuser={
    name:"sagar",//here we have key value pair where key i.e name is taken implicitly as a string by js
    age:18,
        [mysym]:"mykey1",//it does show any warning or error even when we declare without [] but when u print its type is shows string which should have been symbol
    email:"sagar@gmail.com",
    "full name":"sagar moktan",
    lastlogin:["monday","friday"]
}

//accessing objects in js we have two methods
//using dot operator
console.log(jsuser.name);

//using ["propertyname"]
console.log(jsuser["name"]);//the beauty of ths method of accessing is that as we know properties name is stored as the string
//if we had a property which is explicitly declared as a string we cannot access it using traditional dot operator
//console.log(jsuser.full name); it shows error but it can be accessed using ["pname"]
console.log(jsuser["full name"]);

//there is also an interesting case with symbols as as property in bojects
console.log(jsuser[mysym]);


//if we want to update the values of parameter we use =
jsuser.email="sagar@microsoft.com"
//and if you want to freeze ie discard the changes in the property then
Object.freeze(jsuser)


jsuser.greeting=function(){
    console.log("hello users");
}
jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
