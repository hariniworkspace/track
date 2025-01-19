var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['total','Eligible','Interested','placed','yet to be placed'],
        datasets: [{
            label: 'No.of.Students',
            data: [126,109,119,63,46],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgb(153, 102, 255)',
                'rgb(75, 192, 120)',
                'rgba(255, 99, 132, 1)',
            ],
            
        }]
    },
   
});
var graph = document.getElementById('linechart').getContext('2d');
var myChart = new Chart(graph, {
    type: 'bar',
    data: {
        labels: ['Highest Package (LPA)', 
            'Lowest Package (LPA)', 
            'Single Offers' ,
            'Double Offers',
            'Triple Offers' ,
            'Quad Offer'],
        datasets: [{
             data: [47,4,45,13,4,3],
            label: 'Offer Details',
           
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgb(153, 102, 255)',
                'rgba(255, 206, 86, 1)',
                'rgb(66, 163, 55)',
                
            ],
            
            borderWidth: 1
        }]
    },
    
});
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
