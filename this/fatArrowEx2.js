var addn = function () {
    return function (b) {
        console.log(this.a + b);
    };
};

var fatAddn = function () {
    return (b) => {console.log(this.a + b);};
};

var a = 2;
var obj = {
    a: 3,
    fatAdd: (b) => {console.log(this.a + b)},
    add: function (b) {console.log(this.a + b);}
};

addn()(4);      // 6
fatAddn()(4);   // 6

/////////////////////////////////////////////

obj.add(4);         // 7
obj.fatAdd(4);      // 6

////////////////////////////////////////////

obj.addn = addn;
obj.fatAddn = fatAddn;
obj.addn()(4);     // 6 -- reference to `this` value lost
obj.fatAddn()(4);  // 7 --  reference to `this` value persisted
