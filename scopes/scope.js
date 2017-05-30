var buttons = document.getElementsByClassName("someId");
for (var i = 0; i< buttons.length; i++) {
    var button = buttons[i];
    button.onclick = function () {
        console.log(i + 1);
    };
}
// JSBIN url: https://jsbin.com/quliridomi/edit?html,js,console,output
