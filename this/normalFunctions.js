var objA = { a: 'new context' }
var printThis = function () { console.log(this); }
var newPrintThis = printThis.bind(objA);
printThis();    // window/global
newPrintThis(); // objA
