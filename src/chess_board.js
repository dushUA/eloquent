var str='';
for (var i=0; i<8; i++){
    for(var j=0; j<9; j+=2){
        if (i%2==0)
            str += '# ';
        else
            str +=' #';
    }
    str +='\n';
}
console.log(str);