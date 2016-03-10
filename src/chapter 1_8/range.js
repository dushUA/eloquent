function range(arg1, arg2){
    var arr = [];
    var step = arguments[2] || 1;
    if (step < 0){
        for (var i=arg1; i>=arg2; i+=step)
            arr.push(i);

    }
    else
        for (var i=arg1; i<=arg2; i+=step)
            arr.push(i);
    return arr;
}

function sum(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sum(range(1,10)));
console.log(sum(range(1,10,2)));
console.log(sum(range(5,2,-1)));