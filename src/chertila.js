//import * as chart from "chart.js";

const ctx = document.getElementById('myChart');

let data_count = 2;
let labels = [];
//function fillLabels() {
    for (let i = 0; i < data_count; ++i) {
        labels.push(i.toString());
    }
    //labels = [];
//}
//setInterval(function() {
//    fillLabels();
//    data_count++;
//    console.log(labels)
//}, 1000)
const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Cubic interpolation (monotone)',
            data: datapoints,
            borderColor: "#ff0000",
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        }, {
            label: 'Cubic interpolation',
            data: datapoints,
            borderColor: "#0000ff",
            fill: false,
            tension: 0.4
        }, {
            label: 'Linear interpolation (default)',
            data: datapoints,
            borderColor: "#00FF00",
            fill: false
        }
    ]
};

const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: false,
        //maintainAspectRatio:true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
