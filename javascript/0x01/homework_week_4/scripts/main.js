/**
 * VARIABLES
 */
const btnShow = document.getElementById("btnShow");
const boxResult = document.getElementById("boxResult");
const fromApi = "https://jsonplaceholder.typicode.com/users";
let myStrings = [];
let myNumbers = [];
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
function showResult() {
    boxResult.className += "d-block";
}
(async () => {
    await fetch(fromApi)
        .then(resp => resp.json())
        .then(data => {
            data.forEach((user) => {
                let names = user.name;
                myStrings.push(names);
            });
        });
    //console.log(myStrings);
    let min = 1;
    let max = 10;
    let num = max - min;
    for (let i = 0; i < max; i++) {
        let x = Math.random() * num;
        x = Math.round(x);
        myNumbers.push(x);
    }
    //console.log(myNumbers);

    function stringsNumbers(myStrings, myNumbers) {
        let size = myStrings.length;
        for (let i = 0; i < size; i++) {
            myArray.push([myStrings[i], myNumbers[i]]);
        }
    }
    stringsNumbers(myStrings, myNumbers);

    function getStringNumber() {
        return (myArray);
    }
    //console.log(getStringNumber());
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
            'title': 'Waiters and tips',
            'width': 600,
            'height': 400,
            'is3D': true
        }; // Enable view 3D

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
})();