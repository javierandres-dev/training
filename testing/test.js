var d = document;
d.addEventListener("DOMContentLoaded", function () {
    show("Welcome");
    setName();
});
var setName = function () {
    var $form = d.querySelector("form"), $str = d.getElementById("str"), $num = d.getElementById('num'), $list = d.getElementById("list");
    $form.addEventListener("submit", function (e) {
        e.preventDefault();
        var str = $str.value;
        var num = parseInt($num.value);
        if (str.length === 0 || isNaN(num)) {
            console.log("stop");
            return;
        }
        $list.textContent = str + ", " + num;
    });
};
var show = function (aString) {
    d.getElementById('test').innerHTML = "" + aString;
    //console.log(aString);
};
