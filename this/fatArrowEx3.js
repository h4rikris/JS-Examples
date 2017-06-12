var module = function () {
    var echo = function () { console.log(this.a); };
    var fatEcho = () => {console.log(this.a);};
    return {
        echo: echo,
        a: "Inside Object",
        fatEcho: fatEcho
    }
};
var a = "global object";
var mod = module();
mod.echo();             // Inside Object
mod.fatEcho();          // global Object

////////////////////////////////////
// Modifying Object context       //
// /////////////////////////////////

var obj = {a: "Object container"};
mod = module.call(obj);
mod.echo();             // Inside Object
mod.fatEcho();          // Object container
var e = mod.echo;
var fe = mod.fatEcho;
e();                    // global object
fe();                   // Object container
