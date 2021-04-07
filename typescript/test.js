var d = document;
d.addEventListener('DOMContentLoaded', function () {
    show('Welcome');
    setName();
});
var setName = function () {
    var $form = d.querySelector('form'), $str = d.getElementById('str'), $num = d.getElementById('num'), $list = d.getElementById('list');
    $form.addEventListener('submit', function (e) {
        e.preventDefault();
        var str = $str.value;
        var num = parseInt($num.value);
        if (str.length === 0 || isNaN(num)) {
            console.log('stop');
            return;
        }
        $list.textContent = str + ", " + num;
    });
};
var show = function (aString) {
    d.getElementById('test').innerHTML = "" + aString;
};
console.log('Hello, World!');
console.log('-- -- -- -- DataTypes -- -- -- --');
var anyType;
var numberType = 0;
var stringType = 'str';
var arrNumbers = [1, 2, 3, 4];
var arrStrings = ['a', 'b', 'c'];
var arrAny = [1, 'a', true, {}, []];
function types() {
    console.log(anyType);
    console.log(numberType);
    console.log(stringType);
    console.log(arrNumbers);
    console.log(arrStrings);
    console.log(arrAny);
}
types();
console.log('-- -- -- -- Interface -- -- -- --');
var user1 = { username: 'Mary', password: '1234', nickmane: 'mari' };
var user2 = { username: 'Jhon', password: '4321' };
console.log(user1, '\n', user2);
var action1 = {
    greet: function () { return console.log('hi'); }
};
action1.greet();
console.log('-- -- -- -- Functions -- -- -- --');
function fn(a, b) {
    return a + b;
}
console.log(fn(1, 2));
var afn = function (a, b) { return a * b; };
console.log(afn(1, 2));
