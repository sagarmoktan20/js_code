const m_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman","flash"]
const allheros=m_heros.concat(dc_heros)
console.log(allheros);
console.log([...m_heros,...dc_heros]);


const arrarr=[1,2,3,[4,5],[6,7,[8,9,[0]]]]
const usablearr=arrarr.flat(Infinity)
console.log(usablearr);


console.log(Array.isArray("sagar"));
console.log(Array.from("sagar"));


const s1=100
const s2=200
const s3=300
console.log(Array.of(s1,s2,s3));