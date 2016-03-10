var req = new XMLHttpRequest();
req.open("GET", "src/http_req/data.txt");
req.send(null);
console.log(req.responseText);

function b(){
    var div = document.createElement("div");
    div.id="abc";
    document.body.appendChild(div);
}

function c(){
    window.addEventListener("load",function(){
        var div = document.createElement("div");
        div.id="123";
        document.body.appendChild(div);
    });
}
function d(){
    window.addEventListener("load",b);
}

d();
c();
