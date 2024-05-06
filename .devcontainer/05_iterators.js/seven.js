const mynums=[1,2,3,4,5,6,7,8,9]
//here filter method cant print the numbers by adding 10 because the primary purpose of filter method is to
//filter the array items based on given condition and show the results which is obviously the subset of original array
//here adding 10 will create values that does not even belong to the array
const newnums=mynums.filter((item)=>item+10)
console.log(newnums);


//it works cause map just apply condition to every items available in the array and prilt it unlike filter
const newnums2=mynums.map( (item)=>item+10)
console.log(newnums2);


//chaining of maps and filters

const newnums3=mynums.map((item)=>item*10).map((item)=>item+1).filter((item)=>item>40)
console.log(newnums3);