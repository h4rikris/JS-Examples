function isEven(n) {
    if (n == 0) {
        return true;
        }
    return isOdd(n-1);
}
console.log(isEven(3));
function isOdd(n) {
    if (n == 0) {
        return false;
    }
    return isEven(n-1);
}

