function fun () {
    var a = 20;
    var echo = function () {
        console.log(a);
    };
    echo();
    return echo;
}
var a = 10;
var outerEcho = fun();
outerEcho();

