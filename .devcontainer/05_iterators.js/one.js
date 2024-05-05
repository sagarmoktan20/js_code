//loops in js

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);   
}
//loops with arrays
let myarray=["sagar","rajendra","nabin","sanjiv","rabin","swarnim"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

//break and continue statements in loops
// for (let index = 1; index <= 20; index++) {
//     console.log(`the value of i is ${index}`);
//     if(index==5)
//         break;
    
// }

for (let index = 1; index <= 20; index++) {
    
    if(index==5){
        continue;
    }
    console.log(`the value of i is ${index}`);
}