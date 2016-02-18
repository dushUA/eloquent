function MultiplicatorUnitFailutre(){
}

MultiplicatorUnitFailutre.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b){
    if (Math.random() < 0.5)
        return a*b;
    else
        throw new MultiplicatorUnitFailutre();
}

function reliableMultiply(a, b){
    for (;;){
        try {
            return primitiveMultiply(a,b);
            break;
        } catch (e){
            if (!(e instanceof MultiplicatorUnitFailutre))
                throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));