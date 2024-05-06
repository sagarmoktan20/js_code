//reduce method in js
const mynums=[1,2,3,4,5,6,7,8,9]
//it is basically used in the cases where you want to add te total cost of items in the cart as an array  of costs
//its not like we cant do it using any other methods like foreach ,we can do it but it is short andd simple
const newnums=mynums.reduce(function(accumulator,currentvalue){
  return accumulator+currentvalue
},0)
console.log(newnums);

//similarly using arrow function

const newnums2=mynums.reduce( (accumulator,currentvalue)=>accumulator+currentvalue,0)
console.log(newnums2);

const shoppinCard=[
    {
        name:"js",
        price:999
    },
    {
        name:"py",
        price:2999
    },
    {
        name:"kt",
        price:9999
    },
    {
        name:"php",
        price:9099
    },
]
//its interesting to note that currentvalues value id passed at the return section 
//obviously its a bit tricky
const totalcost=shoppinCard.reduce((accumulator,currentvalue)=>accumulator+currentvalue.price,0)
console.log(totalcost);