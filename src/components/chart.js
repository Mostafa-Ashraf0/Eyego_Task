"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeSalaryChart = () => {
  const tableData = useSelector((state) => state.table.tableData);

  const labels = tableData.map((item) => item.id); 
  const salaries = tableData.map((item) => item.salary);

  const data = {
    labels,
    datasets: [
      {
        label: "Salary",
        data: salaries,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "id vs Salary Chart" },
    },
    scales: {
      x: {
        title: { display: true, text: "id" },
      },
      y: {
        title: { display: true, text: "Salary" },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default AgeSalaryChart;