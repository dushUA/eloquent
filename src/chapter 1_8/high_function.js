function average(arr){
    function plus(a, b){return a+b}
    return arr.reduce(plus)/arr.length;
}
function age(p){ return p.died - p.born}
function  male(p){ return p.sex == "m"}
function  female(p){ return p.sex == "f"}

function reduceAncestors(person, f, defaultValue){
    function valueFor(person){
        if (person == null)
            return defaultValue;
        else
            return f(person, valueFor(byName[person.mother]),
                             valueFor(byName[person.father]));
    }
    return valueFor(person);
}

function sharedDna(person, fromMother, fromFather){
    if (person.name == "Pauwels van Haverbeke")
        return 1;
    else
        return (fromMother + fromFather) / 2;
}

function countAncestors(person, test){
    function combine(person, fromMother, fromFather){
        var thisOneCounts = test(person);
        return fromMother + fromFather + (thisOneCounts ? 1 : 0)
    }
    return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person){
    var all = countAncestors(person, function(person){
        return true;
    });
    var longLiving = countAncestors(person,function(person){
        return (person.died - person.born) >= 70;
    });
    return longLiving / all;
}

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);
console.log(ancestry.filter(function(person){
    return person.born > 1900 && person.born < 1925;
}));
var overNinty = ancestry.filter(function(person){
    return person.died - person.born > 90;
});
console.log(overNinty.map(function(person){
    return person.name;
}));
console.log(ancestry.reduce(function(min, cur){
    if (cur.born < min.born) return cur;
    else return min;
}));
console.log(average(ancestry.filter(male).map((age))));
console.log(average(ancestry.filter(female).map((age))));

var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});
console.log(byName["Philibert Haverbeke"])

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDna, 0) / 4);

console.log(longLivingPercentage(byName["Emile Haverbeke"]))

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person){
    return set.indexOf(person.name) > -1;
}
console.log(ancestry.filter(function (person) {
    return isInSet(theSet, person);
}));
console.log(ancestry.filter(isInSet.bind(null, theSet)));