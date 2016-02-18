function countBs(str,ch){
    var count=0;
    for (var i=0; i<str.length-1; i++){
        if (str.charAt(i)==ch) count++;
    }
    return ch + ' = ' +count;
}

console.log(countBs('Bobs BuiBlding','i'))