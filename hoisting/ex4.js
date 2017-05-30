var fun = function () {
    if (abc) {
        var abc = 10;
    }
    console.log(abc);
    return;
    function abc() {}
};
fun();
