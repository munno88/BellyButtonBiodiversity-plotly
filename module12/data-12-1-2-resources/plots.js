Plotly.newPlot("plotArea", [{x: [1, 2, 3, 4, 5], y: [10, 20, 30, 40, 50]}]);


var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
 };
 Plotly.newPlot("plotArea", [trace], layout);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter"
};
var data = [trace];
   Plotly.newPlot("plotArea", data,);

var numbers = [0,2,4,6,8];
var add = numbers.map(function(num){
    return num + 5;
});
console.log(add);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.population;
    
});
console.log(cityNames);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var animal = words.filter(function(letter){
    return letter => s;
});
console.log(animal);

var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1= words.slice(0,3);
console.log(slice1);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1= words.slice(3, );
console.log(slice1);