const names = {ad:"Büşra", soyad:"Yunusoğlu", yas:25};
const {ad,soyad,yas} = names;
console.log(ad);
console.log(yas);

const numbers = [1,5,7,8,11];
const [first,second,third] = numbers;
console.log(third);

const letters = ["a","b","c","d"];
const [,,,fourth] = letters;
console.log(fourth)