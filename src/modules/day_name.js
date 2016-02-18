var dayName = function(){
    var names = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    return function(number){
        return names[number];
    }
}();

console.log(dayName(3));
