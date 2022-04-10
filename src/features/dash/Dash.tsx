import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

// Users including You
const labels = ["You", "User X", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  //  Users input in category
  datasets: [
    {
      label: "Sleep",
      data: labels.map(() =>  {

        const res =  faker.datatype.number({ min: 0, max: 10 })
        console.log("Res", res);
        return res
        
      }),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Work",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Commute",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
    {
      label: "Hobby",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Family",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Health",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      backgroundColor: "rgba(255, 159, 64)",
    },
  ],
};

export default function Dash() {
  return <Bar options={options} data={data} />;
}
