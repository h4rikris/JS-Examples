var isEven = function (n) {
    if (n == 0) {
        return true;
    }
    return isOdd(n-1);
};
console.log(isEven(3));
var isOdd = function (n) {
    if (n == 0) {
        return false;
    }
    return isEven(n-1);
};
