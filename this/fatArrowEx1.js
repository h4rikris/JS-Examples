var add = function () {
    console.log(this.a + this.b);
};
var fatAdd = () => {console.log(this.a + this.b);};
var a = 10;
var b = 5;
add();          // 15
fatAdd();       // 15

///////////////////
// Object context//
//////////////////

var obj = {
    a: 2,
    b: 3,
    add: add,
    fatAdd: fatAdd
};
obj.add();      // 5
obj.fatAdd();   // 15

/* Lesson:
 *
 * There is no way to change `this` value for fatAdd function. 'this' value inside fat arrow function is lexical scoped.
 * It won't change based on how you call that function.
 *
 * */
