//filter

const users = [{name:"Büşra",age:25},{name:"Ayça",age:16}];
const filter = users.filter(user => user.age>18);
console.log(filter[0].name)

//map

const languages = ["React","Python","C#"];
const map = languages.map(todo=>`<li>${todo}</li>`);
console.log(map.join(""));


//reduce

const number = [3,5,8,7,2];
const reduce = number.reduce((a,b)=>a+b,0)
console.log(reduce/(number.length))