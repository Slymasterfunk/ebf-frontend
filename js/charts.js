// Mobile Industry Chart
const ctx = document.getElementById('mobileIndustryChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['IT', 'Retail', 'Auto', 'Security', 'Finance'],
    datasets: [
      {
        data: [23, 15, 17, 12, 21],
        backgroundColor: ['#2b55e5'],
        barThickness: 10,
        borderRadius: 25
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#666666',
          font: {
            size: 10
          }
        }
      },
      y: {
        border: {
          display: false
        },
        beginAtZero: true,
        ticks: {
          precision: 0,
          color: '#666666'
        },
        grid: {
          drawBorder: true,
          lineWidth: 1,
          color: function (context) {
            if (context.tick.value === 0) {
              return '#000000';
            } else {
              return '#aaaaaa';
            }
          }
        }
      }
    }
  }
});

// Desktop Industry Chart
const desktopCtx = document.getElementById('desktopIndustryChart');

new Chart(desktopCtx, {
  type: 'bar',
  data: {
    labels: ['IT', 'Retail', 'Auto', 'Security', 'Finance'],
    datasets: [
      {
        data: [23, 15, 17, 12, 21],
        backgroundColor: ['#2b55e5'],
        barThickness: 40,
        borderRadius: 25
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#666666',
          font: {
            size: 25
          }
        }
      },
      y: {
        border: {
          display: false
        },
        beginAtZero: true,
        ticks: {
          precision: 0,
          color: '#666666',
          font: {
            size: 20
          }
        },
        grid: {
          drawBorder: true,
          lineWidth: 1,
          color: function (context) {
            if (context.tick.value === 0) {
              return '#000000';
            } else {
              return '#aaaaaa';
            }
          }
        }
      }
    }
  }
});
