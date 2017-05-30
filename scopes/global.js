function funA() {
    var a;
    function inner(){
        a = 10;
    }
    inner();
    console.log(a);
}
function funB() {
    function inner() {
        a = 20;
    }
    inner();
    console.log(a);
}
funA();
//console.log(a);
funB();
//console.log(a);
