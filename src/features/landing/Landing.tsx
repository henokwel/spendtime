import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  SimpleGrid,
  Tooltip as BtnTooltip,
  Slider,
  Text,
  Progress,
  Divider,
  RingProgress,
} from "@mantine/core";
import styles from "./landing.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAppDispatch } from "../../app/hooks";
import { userSubmit } from "../../app/auth";
import faker from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip);

export default function Landing() {
  const dispatch = useAppDispatch();

  // User Data
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


  const testData = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
    ]
  }

  // => Working with datasets
  {
    /* <Line

  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }}
/> */
  }
  const handleUserSubmit = () => {
    // check user have used 24h
    if (timeLeft !== 24) return;

    const randomName = [1, 2, 3, 4, 5, 6, 7].map((item) =>
      faker.name.firstName()
    );

    const labels = ["You", ...randomName];

    const userDataSet = [
      {
        label: "Sleep",
        value: sleep,
      },
      {
        label: "Work",
        value: work,
      },
      {
        label: "Commute",
        value: commute,
      },
      {
        label: "Hobby",
        value: hobby,
      },
      {
        label: "Family",
        value: family,
      },
      {
        label: "Health",
        value: health,
      },
    ];

    const userData = {
      labels,
      datasets: [
        {
          label: "Sleep",
          // data:labels.map(item => )
        },
      ],
    };

    console.log(userData);

    dispatch(userSubmit());
  };

  useEffect(() => {
    // Check usedTime and disable after 24h
    // Check change and enable if less than 24h
    let usedTime = work + sleep + commute + health + family + hobby;

    if (usedTime === 24) {
      setTimeLeft(24);
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

  const resetHours = () => {
    setWork(0);
    setWorkEndValue(0);

    setSleep(0);
    setSleepEndValue(0);

    setCommute(0);
    setCommuteEndValue(0);

    setHealth(0);
    setHealthEndValue(0);

    setFamily(0);
    setFamilyEndValue(0);

    setHobby(0);
    setHobbyEndValue(0);
  };
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
            <Text
              component="h1"
              align="center"
              variant="gradient"
              gradient={{
                from: backgroundColorThumb[0],
                to: backgroundColorThumb[5],
                deg: 45,
              }}
              weight={700}
              mb="xs"
            >
              How do you use your time 24 hour ?
            </Text>
            {/* <Text component="h2" size="xl" weight={600}>
              Participate & see others{" "}
            </Text> */}
          </div>

          <div className={styles.formContainer}>
            {/* Sleep */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="xs">
                Sleep
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[1] } }}
                color="dark"
                size="lg"
                radius="xs"
                mb="sm"
                max={maxValue}
                onChange={setSleep}
                value={sleep}
                onChangeEnd={setSleepEndValue}
              />
            </div>

            {/* Work */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="xs">
                Work
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[0] } }}
                color="dark"
                size="lg"
                radius="xs"
                mb="sm"
                max={maxValue}
                onChange={setWork}
                value={work}
                onChangeEnd={setWorkEndValue}
              />
            </div>

            {/* Commute */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="xs">
                Commute
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[2] } }}
                color="dark"
                size="lg"
                radius="xs"
                mb="sm"
                max={maxValue}
                onChange={setCommute}
                value={commute}
                onChangeEnd={setCommuteEndValue}
              />
            </div>

            {/* Family */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="xs">
                Family
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[4] } }}
                color="dark"
                size="lg"
                radius="xs"
                mb="sm"
                max={maxValue}
                onChange={setFamily}
                value={family}
                onChangeEnd={setFamilyEndValue}
              />
            </div>

            {/* Health */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="xs">
                Health
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[5] } }}
                color="dark"
                size="lg"
                radius="xs"
                mb="sm"
                max={maxValue}
                onChange={setHealth}
                value={health}
                onChangeEnd={setHealthEndValue}
              />
            </div>

            {/* Hobby */}
            <div className={styles.form_slider}>
              <Text size="xl" mb="xs">
                Hobby
              </Text>
              <Slider
                styles={{ thumb: { backgroundColor: backgroundColorThumb[3] } }}
                color="dark"
                size="lg"
                radius="xs"
                mb="sm"
                max={maxValue}
                onChange={setHobby}
                value={hobby}
                onChangeEnd={setHobbyEndValue}
              />

              <Divider my="sm" variant="dashed" color="dark" mt="xl" />

              {timeLeft === 24 ? (
                <h3>Yeah! Share your Day Routine with others.</h3>
              ) : (
                <h3> You have used {24 - timeLeft}h</h3>
              )}
              <Progress
                mt="xl"
                size="xl"
                radius="xs"
                sections={[
                  {
                    value: (sleep / 24) * 100,
                    color: backgroundColorThumb[1],
                    label: `Sleep`,
                  },
                  {
                    value: (work / 24) * 100,
                    color: backgroundColorThumb[0],
                    label: "Work",
                  },
                  {
                    value: (commute / 24) * 100,
                    color: backgroundColorThumb[2],
                    label: "Commute",
                  },
                  {
                    value: (family / 24) * 100,
                    color: backgroundColorThumb[4],
                    label: "Family",
                  },
                  {
                    value: (health / 24) * 100,
                    color: backgroundColorThumb[5],
                    label: "Healthy",
                  },
                  {
                    value: (hobby / 24) * 100,
                    color: backgroundColorThumb[3],
                    label: " Hobby ",
                  },
                ]}
              />
            </div>
          </div>

          <div className={styles.formBtnContainer}>
            <Button
              onClick={resetHours}
              color="red"
              mr="md"
              radius="xl"
              size="md"
            >
              Reset
            </Button>
            <BtnTooltip
              label="Use 24h to publish"
              radius="lg"
              withArrow
              mb="xl"
            >
              <Button
                onClick={handleUserSubmit}
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
            {/* <Doughnut data={data2} /> */}
            <RingProgress
              size={450}
              thickness={80}
              sections={[
                {
                  value: (sleep / 24) * 100,
                  color: backgroundColorThumb[1],
                },
                {
                  value: (work / 24) * 100,
                  color: backgroundColorThumb[0],
                },
                {
                  value: (commute / 24) * 100,
                  color: backgroundColorThumb[2],
                },
                {
                  value: (family / 24) * 100,
                  color: backgroundColorThumb[4],
                },
                {
                  value: (health / 24) * 100,
                  color: backgroundColorThumb[5],
                },
                {
                  value: (hobby / 24) * 100,
                  color: backgroundColorThumb[3],
                },
              ]}
              label={
                <Text
                  color="blue"
                  weight={800}
                  align="center"
                  component="h1"
                  size="xl"
                >
                  {`${timeLeft}h`}
                </Text>
              }
            />
          </div>
          <div className={styles.dash_preview}>
            <div className={styles.dash_pic}>
              <h4>Place Holder</h4>
            </div>
            <div className={styles.dash_desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                aliquid excepturi placeat in culpa impedit qui accusamus nihil
                nostrum voluptates numquam nobis quasi omnis, aspernatur ad
                quibusdam mollitia rerum recusandae?
              </p>
            </div>
          </div>
        </section>
      </SimpleGrid>
    </Container>
  );
}
