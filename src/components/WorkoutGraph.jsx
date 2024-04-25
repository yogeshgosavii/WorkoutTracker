import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WorkoutGraph = ({ caloriesData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["12:00 AM", "06:00 AM", "12:00 PM", "06:00 PM"], 
        datasets: [{
          label: 'Calories Burned', 
          data: caloriesData, 
          backgroundColor: '#89A1FF',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Calories'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        elements: {
          line: {
            tension: 0
          }
        },
        layout: {
          padding: 10
        },
        scales: {
          x: {
            grid: {
              display: false // Remove x-axis grid lines
            }
          },
          y: {
            grid: {
              display: false // Remove y-axis grid lines
            }
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, [caloriesData]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default WorkoutGraph;
