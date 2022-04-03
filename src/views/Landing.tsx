import React from "react";
import { Button, Container, SimpleGrid ,Slider} from "@mantine/core";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Grey"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 11],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(196, 196, 196, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(196, 196, 196, 1)",
      ],
      borderWidth: 0,
    },
  ],
};


export default function Landing() {





  return (
    <div>
      <Container fluid>
        <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[
            // { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "lg", cols: 2, spacing: "lg" },
            { maxWidth: "md", cols: 1, spacing: "sm" },
          ]}
        >
          <div className="mydiv">
            <p>Label</p>
            <Slider color="dark" />

            <Slider
              labelTransition="skew-down"
              labelTransitionDuration={150}
              labelTransitionTimingFunction="ease"
            />
          </div>
          <div className="mydiv">2</div>
        </SimpleGrid>
        {/* <Doughnut data={data} />
      <Slider color="dark" /> */}
      </Container>
    </div>
  );
}
