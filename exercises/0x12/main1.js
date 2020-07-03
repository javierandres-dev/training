const readGrade = document.getElementById('readGrade')
const btnAdd = document.getElementById('btnAdd')
let grades = [];
let grade;
let lowest;
let average;
let count;
let highest;
let passing = [];
let failing = [];
let raised = [];
let sum = 0;
btnAdd.addEventListener('click', () => {
    grade = parseInt(readGrade.value)
    if (grade >= 0 && grade <= 20) {
        grades.push(grade)
        count = grades.length
        highest = grades.reduce(function (a, b) {
            return Math.max(a, b)
        })
        lowest = grades.reduce(function (a, b) {
            return Math.min(a, b)
        })
        sum += grade
        average = sum / count
        average = Math.round(average)
        if (grade > 9) {
            passing.push(grade)
        } else {
            failing.push(grade)
        }
        passing.forEach(getItems)
        failing.forEach(getItems)

        function getItems(item) {
            item
        }
        document.getElementById('count').innerHTML = count
        document.getElementById('average').innerHTML = average
        document.getElementById('highest').innerHTML = highest
        document.getElementById('lowest').innerHTML = lowest
        document.getElementById('passing').innerHTML = passing
        document.getElementById('failing').innerHTML = failing
    }
})