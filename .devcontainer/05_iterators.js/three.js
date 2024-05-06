//arr1s and arrays specific loops in js
const obj1={
    name:"sagar",
    age:20,
    address:"hetauda"
}

for (const key in obj1) {

   console.log(key);
        
    }

  //  similarly for arrays we can do
 
//   const arr1=[1,2,3,4,5,6,7,8,9,0)
// //using for in loop
//   for (const key in arr1) {
//   console.log(key);
        
//     }
  

    //maps
    //maps are also an objects in js which store unique value it avoids duplicacy of elements 
    //it prints the keys and value pairs in the same format as it was declared 
  // its important to note that objects cant be iterated using this method 
    const mymap= new Map()
    mymap.set(`np`,"nepal")
    mymap.set(`in`,"india")
    mymap.set(`fr`,"france")

//using for of loop
for (const [key,value] of mymap) {
  console.log(key,`:-`,value);    
}


