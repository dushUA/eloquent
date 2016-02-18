function arrayToList(arr){
    var list = null;
    for (var i=arr.length-1; i>=0; i--){
        list = {value: arr[i], rest: list};
    }
    return list;
}

function listToArray(elem){
    var arr = [];
    for (var node=elem; node; node=node.rest){
        arr.push(node.value);

    }
    return arr;
}

function prepend(value, list){
    return {value: value, rest: list};
}

function nth(list,pos){
    if (!list)
        return undefined;
    else if (pos == 0)
        return list.value;
    else
        return nth(list.rest, pos - 1);
}

console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10,20,30]),2));
