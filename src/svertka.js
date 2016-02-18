var arrays = [[1,2,3],[4,5],[6]];

console.log(arrays.reduce(function(arrOut,cur){return arrOut.concat(cur)}));