document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Patients',
                data: [10, 20, 30, 40, 50],
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Example of adding interactivity
    document.querySelector('.user-profile').addEventListener('click', function () {
        alert('User Profile Clicked!');
    });
});
