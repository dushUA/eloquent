function filter(arr, test){
    var passed = [];
    for (var i=0; i<arr.length; i++){
        if (test(arr[i]))
            passed.push(arr[i]);
    }
    console.log(passed.length);
    return passed;
}

function map(arr, transform){
    var mapped = [];
    for (var i=0; i<arr.length; i++)
        mapped.push(transform(arr[i]));
    return mapped;
}

function reduce(arr, combine, start){
    var currrent = start;
    for (var i=0; i<arr.length; i++)
        currrent = combine(currrent, arr[i]);
    return currrent;
}