var graph = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(graph, {
    type: 'doughnut',
    data: {
        labels: ['I Year', 'II Year', 'III Year'],
        datasets: [{
             data: [10,40,50],
            label: ' involvement',
           
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    
});
