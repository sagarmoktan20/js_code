//promise in js is an object, Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

const lie=  new Promise(function(resolve , reject){//callback function
    setTimeout(function(){
        console.log("async complteted");
    },1000)
    //resolve is used to trigger then()
    resolve()
}).then(function(){
console.log("async resolved");
})


//lets pass the data which might be the data from the server 
const lie1=new Promise(function(resolve,reject){
    resolve({name:"sagar",email:"sagar@gmail.com"})
}).then(function(data){
  console.log(data.name);
})


const lie2 = new Promise(function(resolve,reject){
setTimeout(function(){
    let error=false;
    if(error){
reject("Error! something went wrong")
    }else{
        resolve({name:"hom",email:"hom@gmail.com"})
    }
},1000)
})

lie2.
then(function(homData){
    console.log(homData.name);
    return homData.email;//here the returned data is passed to the next then(function()) it is called chaining
}).
then(function(email){
console.log(email);
}).
catch(function(error){
    console.log(error);
}).
finally(function(){
    console.log("finally the promise is either resolved or rejected");
})


const lie3 = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=true
        if(error){
       reject("error! something went wrong")
        }else{
            resolve({name:"JS",email:"js@gmail.com"})
        }
    },1000)
});


//asyne without try catch, only proceeds when it gets some response from the resolve i.e it doesnt handle error
async function consumelie3(){
 try {
    const response= await lie3
    console.log(response);
 } catch (error) {
    console.log("error detected in the catch");
 }
  
}

consumelie3()






fetch('https://api.github.com/users/hiteshchoudhary')
.
then((response)=>{
return response.json();
}).
then((data)=>{
    console.log(data.followers);
}).
catch((error)=>{
    console.log("something went wrong!");
})

//lets implement it with async

async function getData(){
    try {
        const response= await fetch('https://api.github.com/users/hiteshchoudhary')
      
        const data= await response.json();
        console.log(data);
    } catch (error) {
        console.log("something went wrong!!");
    }
}

getData();