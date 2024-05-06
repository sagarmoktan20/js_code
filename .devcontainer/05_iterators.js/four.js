//using forin loops for iterating objects

const myobj={
    name:"sagar",
    age:20,
    address:"hetauda"
}

//forin objects are those where we dont need to initialize ti iterator like in traditional for loop
for (const key in myobj) {
    //here in this case of forin loop with object key will simply print the key and the value is printed using ${myobj[key]}
console.log(`${key} has value ${myobj[key]}`);
        
    }


    //here we are using for in loop with array and ofcourse we dont need to initalize the iterator
    const arr2=["c","c++","c#","js"]

    for (const key in arr2) {
        
          console.log(arr2[key]);  
        }
    


