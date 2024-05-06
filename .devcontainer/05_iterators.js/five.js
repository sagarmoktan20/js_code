//for each and callback functions
//similarly we have for each loop which implements the defined function to each item in an array or an object declared here we use call back
const arr1=["js","php","kotlin","c","c++","laravel"]

arr1.forEach(function(item){
 // console.log(item);
})

//implementing using arrow function


arr1.forEach( (item)=>{
  //  console.log(item);
})


//
function printme(item){
    console.log(item);

}

arr1.forEach(printme)//here we just need to give refrence of the function that we want to exucute each item on

arr1.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})



//here simply printed the items inside an object of an array
const mycoding=[
    {
        languageNmae:"javascrpit",
        extension:".js"
    },
    {
        languageNmae:"kotlin",
        extension:".kt"
    },
    {
        languageNmae:"c",
        extension:".cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageNmae,item.extension);
})
