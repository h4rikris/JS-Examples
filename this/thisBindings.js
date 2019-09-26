// Default Binding
var a = 3;
function foo() {
    console.log(this.a);
}
foo(); // 3

// Implicit Binding
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); // 2
var bar = obj.foo;
bar();      // 3    NOTE: Implicit binding will lose if you call the same function separately

// Explicit binding
foo() // 3
foo.call(obj) // 2

