const name ="sagar"
const repocount=50
console.log(`hello my name is ${name} and my repocount is ${repocount}`);

// a better way to declare string
const gamename=new String("s-a-g-a-r")
console.log(gamename[2]);
    console.log(gamename.toUpperCase());
    console.log(gamename.length)
    console.log(gamename.charAt(3));
    console.log(gamename.indexOf("a"));

    const newstring=gamename.substring(0,4)
    console.log(newstring);
    console.log(gamename.slice(-2,5));

    //trim function in string
    const email=new String("   sagar@gmail.com   ")
    console.log(email.trim());


    const url="https://sagar.com/sagar%20sagart"
    console.log(url.replace('%20','_'));
    console.log(url.includes('%20'));
    console.log(gamename.split('_'));