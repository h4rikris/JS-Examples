var add = function (a, b) {
    return a + b;
}
var addn = function (n) {
    return function (b) {
        return add(n, b);
    }
};
var add2 = addn(2);
console.log(add(1,2));
console.log(add2(3));
