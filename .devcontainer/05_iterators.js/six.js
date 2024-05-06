//for each loops

//its important to note that foreach loop do not return values
//for example

const coding=["c","c++","kotlin","js","php"]

const lang=coding.forEach((item)=> {
    console.log(item);
})

console.log(lang);//as we can see by printing it it will not get th values cause foreach loop didint return any value 

//which is fixed by a filter method

const numbers = [1,2,3,4,5,6,7,8,9,10]

const num=numbers.filter((item)=>  item > 5)//remmember that it is implicit return without return keyword
console.log(num);


//there also a method in foreach to return value but a bit hectic
//here we just declared an empty array then we pushed items in the array using callback function
const newnums=[]
numbers.forEach((item)=>{
   newnums.push(item)
})

console.log(newnums);

//lets use the filter function like its used in real project
//as we knoe the when we fetch data from database it return the data which is generally an array of objects 
//now we will use filter methods to filter the data that the user wants

const books=[
    { title: 'Book1', genre: 'Fiction', publish: 1980, edition:2000},
    { title: 'Book2', genre: 'Fiction', publish: 1997, edition:2000},
    { title: 'Book 3', genre: 'nonFiction', publish: 1977, edition:2005},
    { title: 'Book 4', genre: 'drama', publish: 2000, edition:2008},
    { title: 'Book 5', genre: 'history', publish: 2007, edition:2010},
    { title: 'Book 6', genre: 'history', publish: 2011, edition:2020},
    { title: 'Book 7', genre: 'future', publish: 2015, edition:2012},
    { title: 'Book 8', genre: 'future', publish: 2020, edition:2019}
]

const userbooks=books.filter((bk)=> bk.genre==="history")
console.log(userbooks);

const userbooks2=books.filter((bk)=>bk.publish>2000)//ite importan to note that we have implicit return when we have not opened the scope
console.log(userbooks2);