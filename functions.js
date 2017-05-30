function normal (a) {
    console.log(a);
};
var aNormal = function (a) {
    console.log(a);
};
normal("a");
aNormal("b");
(function (a) {console.log(a);})("c");
var a = function (a) {console.log(a)}("d");
