var fact = function (n) {
    if (n <= 1) return 1;
    return n * fact(n-1);
};
var bar = fact;
//fact = 10;
console.log(bar(5));
