var ancestry = JSON.parse(ANCESTRY_FILE);

function average(arr){
    function plus(a, b){return a+b}
    return arr.reduce(plus)/arr.length;
}

var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});
var differences = ancestry.filter(function(person) {
    return byName[person.mother] != null;
}).map(function(person) {
    return person.born - byName[person.mother].born;
});
console.log(average(differences));
