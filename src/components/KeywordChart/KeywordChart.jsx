import './KeywordChart.scss';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

function KeywordChart({ keywords }) {
  if (!keywords || keywords.length === 0) return null;

  // Aggregate keyword counts
  const keywordCount = keywords.reduce((acc, item) => {
    acc[item.keyword] = (acc[item.keyword] || 0) + 1;
    return acc;
  }, {});

  // Labels and counts for each keyword
  const labels = Object.keys(keywordCount);
  const values = Object.values(keywordCount);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Frequency',
        data: values,
        backgroundColor: '#DE7921',
        borderColor: '#DE7921',
        borderWidth: 2,
        borderRadius: 5, // Rounds the corners of the bars
        barThickness: 20,
        maxBarThickness: 40,
      },
    ],
  };

  // Plugin to display count at the end of each bar
  const chartPlugins = [
    {
      id: 'displayValue',
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        chart.data.datasets.forEach((dataset, i) => {
          const meta = chart.getDatasetMeta(i);
          meta.data.forEach((bar, index) => {
            const value = dataset.data[index];
            const label = `${value}`; // Just display the count

            ctx.fillStyle = 'black'; // Set text color
            ctx.fillText(label, bar.x + 10, bar.y + 5); // Adjust position to the right of the bar
          });
        });
      },
    },
  ];

  const options = {
    indexAxis: 'y', // Horizontal bars
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: 'black',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to expand
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      {' '}
      {/* Adjust height as needed */}
      <Bar data={chartData} options={options} plugins={chartPlugins} />
    </div>
  );
}

export default KeywordChart;
