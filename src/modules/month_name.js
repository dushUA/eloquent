var month = function(){
    var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return{
        name: function(number){return names[number];},
        number: function(name){return names.indexOf(name);}
    }
};

console.log(month.name(3));
console.log(month.number('Nov'));
