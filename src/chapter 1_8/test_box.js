var box = {
    locked: true,
    unlock: function(){this.locked = false},
    lock: function(){this.locked = true},
    _content: [],
    get content(){
        if (this.locked) throw new Error("Closed!");
        return this._content;
    }
};

function withBoxUnlocked(act){

    box.unlock();
    try{
        return act();
    }finally {
        box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("gold");
});

try{
    withBoxUnlocked(function(){
        throw new Error("Pirat! Cancel!");
    });
} catch (e){
    console.log("Error:", e);
}
console.log(box.locked);
box.unlock();
console.log(box.content);