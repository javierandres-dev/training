/*
 * API
 */
let strApiUrlTodos = "https://jsonplaceholder.typicode.com/todos/";
let strApiUrlUsers = "https://jsonplaceholder.typicode.com/users/";

function getFromApi(searchString, searchNumber) {
    fetch(strApiUrlTodos)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let objTodos = myJson;
            fetch(strApiUrlUsers)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    let objUsers = myJson;
                    let myObj = {};
                    let getNumber = 0;
                    for (let i = 0; i < objTodos.length; i++) {
                        let userId = objTodos[i].userId;
                        myObj[userId] = [];
                        //console.log(objTodos[i].completed);
                        console.log(getNumber);
                        while (objTodos[i].completed === true) {
                            getNumber++;
                        }
                        for (let j = 0; j < objUsers.length; j++) {
                            let id = objUsers[j].id;
                            if (userId === id) {
                                let getString = objUsers[j].name;
                                console.log(getString);
                                //console.log(getNumber);
                            }
                        }
                    }
                });
        });
}
getFromApi(strApiUrlTodos, strApiUrlUsers);
let theData = [
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
]
//console.log(theData);
//console.log(typeof(theData));
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
    data.addRows(theData);

    // Set chart options
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 800,
        'height': 400,
        'is3D': true
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}