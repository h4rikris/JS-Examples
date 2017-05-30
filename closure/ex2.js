function fun () {
    var a = 20;
    var echo = function () {
        console.log(a);
    };
    echo();
    return;
}
fun();
var a = 10;
var outerEcho = function () {
    console.log(a);
}
outerEcho();
