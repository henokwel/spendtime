import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  SimpleGrid,
  Tooltip as BtnTooltip,
  Slider,
  Text,
  Progress,
} from "@mantine/core";
import styles from "./landing.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function Landing() {
  const [work, setWork] = useState(0);
  const [workEndValue, setWorkEndValue] = useState(0);

  const [sleep, setSleep] = useState(0);
  const [sleepEndValue, setSleepEndValue] = useState(0);

  const [commute, setCommute] = useState(0);
  const [commuteEndValue, setCommuteEndValue] = useState(0);

  const [hobby, setHobby] = useState(0);
  const [hobbyEndValue, setHobbyEndValue] = useState(0);

  const [family, setFamily] = useState(0);
  const [familyEndValue, setFamilyEndValue] = useState(0);

  const [health, setHealth] = useState(0);
  const [healthEndValue, setHealthEndValue] = useState(0);

  const [outOfTime, setOutOfTime] = useState(false);

  const maxValue = 12;

  const [timeLeft, setTimeLeft] = useState(0);
  /////////////////////////////////////////////////////////////

  const backgroundColorThumb = [
    "rgba(255, 99, 132)",
    "rgba(75, 192, 192)",
    "rgba(54, 162, 235)",
    "rgba(255, 206, 86)",
    "rgba(153, 102, 255)",
    "rgba(255, 159, 64)",
  ];
  const data2 = {
    labels: ["work", "sleep", "commute", "hobby", "family", "health"],

    datasets: [
      {
        label: "# of Votes",
        data: [work, sleep, commute, hobby, family, health],
        backgroundColor: backgroundColorThumb,
        borderColor: backgroundColorThumb,
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    // Check usedTime and disable after 24h
    // Check change and enable if less than 24h

    let usedTime = work + sleep + commute + health + family + hobby;

    if (usedTime === 24) {
      setOutOfTime(true);
      return;
    }

    setOutOfTime(false);

    setTimeLeft(24 - usedTime);
  }, [
    workEndValue,
    sleepEndValue,
    commuteEndValue,
    healthEndValue,
    familyEndValue,
    hobbyEndValue,
  ]);

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
        <section className={styles.landingContainer}>
          <div className={styles.landingHeader}>
            <h1>Participate & see others </h1>
            <p>How do you use your time 24 hour ?</p>
          </div>

          <div className={styles.formContainer}>
            {/* Sleep */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="md">
                Sleep
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[1] } }}
                color="dark"
                size="lg"
                radius="xs"
                max={maxValue}
                onChange={setSleep}
                value={sleep}
                onChangeEnd={setSleepEndValue}
              />
            </div>

            {/* Work */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="md">
                Work
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[0] } }}
                color="dark"
                size="lg"
                radius="xs"
                max={maxValue}
                onChange={setWork}
                value={work}
                onChangeEnd={setWorkEndValue}
              />
            </div>

            {/* Commute */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="md">
                Commute
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[2] } }}
                color="dark"
                size="lg"
                radius="xs"
                max={maxValue}
                onChange={setCommute}
                value={commute}
                onChangeEnd={setCommuteEndValue}
              />
            </div>

            {/* Family */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="md">
                Family
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[4] } }}
                color="dark"
                size="lg"
                radius="xs"
                max={maxValue}
                onChange={setFamily}
                value={family}
                onChangeEnd={setFamilyEndValue}
              />
            </div>

            {/* Health */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="md">
                Health
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[5] } }}
                color="dark"
                size="lg"
                radius="xs"
                max={maxValue}
                onChange={setHealth}
                value={health}
                onChangeEnd={setHealthEndValue}
              />
            </div>

            {/* Hobby */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="md">
                Hobby
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[3] } }}
                color="dark"
                size="lg"
                radius="xs"
                max={maxValue}
                onChange={setHobby}
                value={hobby}
                onChangeEnd={setHobbyEndValue}
              />

              <h1>{timeLeft}</h1>
              <Progress
                mt="xl"
                size="xl"
                radius="xs"
                sections={[
                  {
                    value: (sleepEndValue / 24) * 100,
                    color: backgroundColorThumb[1],
                    label: `Sleep`,
                  },
                  {
                    value: (workEndValue / 24) * 100,
                    color: backgroundColorThumb[0],
                    label: "Work",
                  },
                  {
                    value: (commuteEndValue / 24) * 100,
                    color: backgroundColorThumb[2],
                    label: "Commute",
                  },
                  {
                    value: (familyEndValue / 24) * 100,
                    color: backgroundColorThumb[4],
                    label: "Family",
                  },
                  {
                    value: (healthEndValue / 24) * 100,
                    color: backgroundColorThumb[5],
                    label: "Healthy",
                  },
                  {
                    value: (hobbyEndValue / 24) * 100,
                    color: backgroundColorThumb[3],
                    label: " Hobby ",
                  },
                ]}
              />
            </div>
          </div>

          <div className={styles.formBtnContainer}>
            <Button color="red" mr="md" radius="xl" size="md">
              Reset
            </Button>
            <BtnTooltip label="Use 24h to publish" radius="lg" withArrow>
              <Button
                color="dark"
                radius="xl"
                size="md"
                disabled={!outOfTime ? true : false}
              >
                Publish
              </Button>
            </BtnTooltip>

          </div>
        </section>

        <section className={styles.chart_container}>
          <div className={styles.chart_circle}>
            <Doughnut data={data2} />
          </div>
        </section>
      </SimpleGrid>
    </Container>
  );
}
