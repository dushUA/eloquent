function reverseArray(arrIn){
    var arrOut = [];
    for (var i=0; i<arrIn.length; i++)
        arrOut[i] = arrIn[arrIn.length-i-1];
    return arrOut;
}

function reverseArrayInPlace(arr){

    for (var i=0; i<=arr.length/2; i++){
        var tmp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tmp;
    }
    return arr;

}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(["A", "B", "C", "D"]));