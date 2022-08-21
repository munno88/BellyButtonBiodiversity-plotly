// console.log (cityGrowths);

// var sortedCities = cityGrowths.sort((a,b) =>
//     a.Increase_from_2016 - b.Increase_from_2016).reverse();
// console.log(sortedCities);

// var topFiveCities = sortedCities.slice(0,5);
// console.log (topFiveCities);

// var topFiveCityNames = cityGrowths.map(city => city.City);
// var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
//     console.log(topFiveCityNames);
//     console.log(topFiveCityGrowths);

// var trace = {
//     x: topFiveCityNames.slice(0, 5),
//     y: topFiveCityGrowths,
//     type: "bar"
// };
// var data = [trace];

// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City" },
//     yaxis: {title: "Population Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", data, layout);

//top seven largest cities by population

var sortedCities = cityGrowths.sort((a,b) =>
    a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

var topSevenCities = sortedCities.slice(0,7);
console.log (topSevenCities);

var topSevenCityNames = cityGrowths.map(city => city.City);
var topSevenCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
    console.log(topSevenCityNames);
    console.log(topSevenCityGrowths);

var trace = {
    x: topSevenCityNames.slice(0, 7),
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);



