import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ charData }) => {
  const options = {
    plugins: {
      legend: false,
      title: {
        display: false,
        text: 'Rapid Quest',
      },
      customCanvasBackgroundColor: {
        color: 'lightGreen',
      },
    },
    layout: {
      margin: {
        top: 30,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 300,
        with: 60,
        stepSize: 100,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className='w-[280px] mt-6'>
      <Bar data={charData} options={options} />
    </div>
  );
};

export default BarChart;
