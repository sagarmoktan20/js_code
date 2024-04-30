/*let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toJSON());
*/

//if the month you declare is in single digit it will start with 0 but when it like mm lit starts with 01 as jan

/*let mycreatedate=new Date(2025,0,25,5,3)
console.log(mycreatedate.toLocaleString());

*/
let mytimestamp=Date.now()
console.log(mytimestamp.toDateString);


let mytimestamps = Date.now();
let myDate = new Date(mytimestamps);
console.log(myDate.toDateString());

let olddate=new Date


console.log(`${myDate.getDay()} and the time is ${myDate.getTime()}`);


olddate.toLocaleString('default',{
    weekday:"long"
})

