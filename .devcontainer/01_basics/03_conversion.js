/*let score="33abc"
console.log(typeof score)
let valueInnumber=Number(score)//it successfully converted the string to number 
console.log(typeof valueInnumber)//it also showed the type as number 
console.log(valueInnumber)//but in reality when we have something like"33abc" it should not be converted to number and if we check it shows NaN i.e not a number
*/


/* here null type is object which is weird case js
also it says it converted the null into a number but that should not be possible
instead it converts a null into a number 0 */

/*let score=null
console.log(typeof score)
let valueInnumber=Number(score) 
console.log(typeof valueInnumber)
console.log(valueInnumber)*/


/*its interesting that undefined has a type undefined itself
and yes js also claims to have converted the undefined to a number 
but in reality its a NaN*/
let score=undefined
console.log(typeof score)
let valueInnumber=Number(score) 
console.log(typeof valueInnumber)
console.log(valueInnumber)



/* when it comes to booleans
1=> true & 0=> false
""=> false but "sagar"=> true
*/
