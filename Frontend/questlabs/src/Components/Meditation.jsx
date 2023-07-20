import React, { useEffect } from "react";
import {
  Stepper,
  Heading,
  Step,
  StepIndicator,
  StepStatus,
  StepDescription,
  StepTitle,
  Box,
  StepSeparator,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import "./../Styles/Meditation.css";
import { useState } from "react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const Meditation = () => {
  const [current, setCurrent] = useState(0);
  const [feeling, setFeeling] = useState("");
  const [work, setWork] = useState("");
  const [issues, setIssues] = useState("");

  return (
    <Box id="meditationDiv">
      {/* <Heading as='h2' size='2xl'>
    (2xl) In love with React & Next
  </Heading> */}
      <Text fontSize={["25px", "55px"]} fontWeight="bold">
        Meditator
      </Text>
      <Stepper size="lg" colorScheme="yellow" index={current} id="stepper">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={`✔`} incomplete={`😅`} active={`📍`} />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {current == 0 && (
        <Box id="inputDiv">
          <Text fontSize={"25px"} id="medTitle">
            How are you feeling right now?
          </Text>
          <Textarea
            placeholder="Here is a sample placeholder"
            id="text"
            size="lg"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
          <Box>
            <Button
              colorScheme="telegram"
              id="btn"
              onClick={() => setCurrent((prev) => prev + 1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
      {current == 1 && (
        <Box>
          <Text fontSize={"25px"} id="medTitle">
            What do you do?
          </Text>
          <Textarea
            placeholder="Here is a sample placeholder"
            id="text"
            size="lg"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
           <Box>
            <Button
              colorScheme="telegram"
              id="btn"
              onClick={() => setCurrent((prev) => prev + 1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
      {current == 2 && (
        <Box>
          <Text fontSize={"25px"} id="medTitle">
            What are the issues you are facing today?
          </Text>
          <Textarea
            placeholder="Here is a sample placeholder"
            id="text"
            size="lg"
            value={issues}
            onChange={(e) => setIssues(e.target.value)}
          />
           <Box>
            <Button
              colorScheme="telegram"
              id="btn"
              onClick={() => setCurrent((prev) => prev + 1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
      {/* bg="#3b82f6" */}
      {/* <Button
        colorScheme="telegram"
        id="btn"
        onClick={() => setCurrent((prev) => prev + 1)}
      >
        Next
      </Button> */}
    </Box>
  );
};

export default Meditation;
