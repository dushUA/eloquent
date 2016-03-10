function isEven(arg){
    if (arg==0) return true;
    else if (arg==1) return false;
    else return isEven(arg-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));