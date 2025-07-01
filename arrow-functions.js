const addFunction = (...numbers) => {
    return numbers.reduce((total,n) => total+n,0);
};

console.log(addFunction(2,3,5));
