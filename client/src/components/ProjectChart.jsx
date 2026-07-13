import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ProjectChart() {
  const data = {
    datasets: [
      {
        data: [72, 28],
        backgroundColor: [
          "#5B5CEB",
          "#E5E7EB",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">

      <div className="w-40 h-40">

        <Doughnut
          data={data}
          options={{
            cutout: "78%",
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />

      </div>

      <h3 className="text-xl font-bold mt-3">
        72%
      </h3>

      <p className="text-gray-500">
        Overall Progress
      </p>

    </div>
  );
}

export default ProjectChart;