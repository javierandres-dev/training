/**
 * VARIABLES
 */
//let strings = ['Mushrooms', 'Onions', 'Olives', 'Zucchini', 'Pepperoni'];
//let numbers = [3, 1, 1, 1, 2];
const btnShow = document.getElementById("btnShow");
const boxResult = document.getElementById("boxResult");
const strJsonApiTodos = "https://jsonplaceholder.typicode.com/todos";
const strJsonApiUsers = "https://jsonplaceholder.typicode.com/users";
let myStrings = [];
let myNumbers = [];
let myTitles = [];
let myArray = [];
/**
 * EVENTS
 */
eventListeners();

function eventListeners() {
    btnShow.addEventListener("click", showResult);
}
/**
 * FUNCTIONS
 */
function myTestOne() {
    fetch(strJsonApiTodos)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => searchInTodos(json))

    function searchInTodos(json) {
        //console.log(json);
        let size = json.length;
        let todos = json;
        let tasks = new Array();
        let task = new Object();
        for (let i = 0; i < size; i++) {
            //console.log(todos[i]);
            task[i] = {};
            task[i].userId = todos[i].userId;
            task[i].title = todos[i].title;
            task[i].completed = todos[i].completed;
            tasks.push(task[i]);
        }
        //console.log(tasks);
        //console.log(tasks[0]);
        //console.log(tasks.length);
        fetch(strJsonApiUsers)
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(json => searchInUsers(json))

        function searchInUsers(json) {
            //console.log(json);
            let size = json.length;
            let users = json;
            let students = new Array();
            let student = new Object();
            for (let i = 0; i < size; i++) {
                //console.log(users[i]);
                student[i] = {};
                student[i].id = users[i].id;
                student[i].name = users[i].name;
                students.push(student[i]);
            }
            //console.log(students);
            //console.log(students[0]);
            //console.log(students.length);
            let theTitles = new Array();
            let theTitle = new Object();
            for (let i = 0; i < tasks.length; i++) {
                //console.log(tasks[i]);
                //console.log(tasks[i].userId);
                //console.log(tasks[i].title);
                //console.log(tasks[i].completed);
                for (let j = 0; j < students.length; j++) {
                    //console.log(students[j]);
                    //console.log(students[j].id);
                    //console.log(students[j].name);
                    if (tasks[i].userId === students[j].id) {
                        if (tasks[i].completed === true) {
                            theTitle[i] = {};
                            theTitle[i].userId = tasks[i].userId;
                            theTitle[i].title = tasks[i].title;
                            theTitles.push(theTitle[i]);
                        }
                    }
                }
            }
            myTitles = Array.from(new Set(theTitles));
            //console.log(myTitles);
            //console.log(students);
            //console.log(myTitles.length);
            //console.log(students.length);
            for (let i = 0; i < myTitles.length; i++) {
                for (let j = 0; j < students.length; j++) {
                    if (myTitles[i].userId === students[j].id) {
                        console.log(myTitles[i].userId);
                    }
                }
            }
        }
    }
}
myTestOne();

function showResult() {
    boxResult.className += "d-block";
}

function stringsNumbers(s, n) {
    for (let i = 0; i < s.length; i++) {
        //console.log(s[i]);
        //console.log(n[i]);
        myArray.push([s[i], n[i]]);
    }
}
stringsNumbers(myStrings, myNumbers);
//console.log(myArray);
//console.log(typeof(myArray));
function getStringNumber() {
    return (myArray);
}
console.log(myStrings);
console.log(myNumbers);
console.log(myArray);
/**
 * Google Charts
 */
// Load the Visualization API and the corechart package.
google.charts.load('current', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(getStringNumber()); // Source data to print
    /*
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
    */

    // Set chart options
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 800, // Change size
        'height': 400, // Change size
        'is3D': true
    }; // Enable view 3D

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}