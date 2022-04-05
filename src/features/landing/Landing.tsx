import React, { useEffect, useState } from "react";
import { Center, Container, SimpleGrid, Slider, Text } from "@mantine/core";
import styles from "./landing.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function Landing() {
  const [label0, setLabel0] = useState(0);
  const [label0Value, setLabel0Value] = useState(0);

  const [label1, setLabel1] = useState(0);
  const [label1Value, setLabel1Value] = useState(0);

  const [label2, setLabel2] = useState(0);
  const [label2Value, setLabel2Value] = useState(0);

  const maxValue = 24;
  const [timeLeft, setTimeLeft] = useState(0);
  /////////////////////////////////////////////////////////////

  const data2 = {
    labels: ["label0", "label1", "label2"],
     
    datasets: [
      {
        label: "# of Votes",
        data: [label0, label1, label2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
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

  const data = {
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

  useEffect(() => {
    // Check usedTime and disable after 24h use

    let usedTime = label0 + label1 + label2;
    setTimeLeft(maxValue - usedTime);
  }, [label0Value, label1Value, label2Value]);

  return (
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
        <section className={styles.form}>
          <div className={styles.form_slider}>
            <Text size="xl" mb="md">
              Label 0
            </Text>
            <Slider
              color="dark"
              size="lg"
              radius="xs"
              max={maxValue}
              onChange={setLabel0}
              value={label0}
              onChangeEnd={setLabel0Value}
              />
          </div>

          <div className={styles.form_slider}>
            <Text size="xl" mb="md">
              Label 1
            </Text>
            <Slider
              color="dark"
              size="lg"
              radius="xs"
              max={maxValue}
              onChange={setLabel1}
              value={label1}
              onChangeEnd={setLabel1Value}
              />
          </div>

          <div className={styles.form_slider}>
            <Text size="xl" mb="md">
              Label 2
            </Text>
            <Slider
              color="dark"
              size="lg"
              radius="xs"
              max={maxValue}
              onChange={setLabel2}
              value={label2}
              onChangeEnd={setLabel2Value}
              />
          </div>
        </section>
        <section className={styles.chart_container}>
          <div className={styles.chart_circle}>
              <h1>{timeLeft}</h1>
            <Doughnut data={data2} />
          </div>
        </section>
      </SimpleGrid>
    </Container>
  );
}
