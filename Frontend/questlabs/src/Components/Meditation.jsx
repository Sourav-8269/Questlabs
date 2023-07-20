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
import axios from "axios";

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
  const [result,setResult]=useState("");

  const getMeditationData=()=>{
    console.log(feeling,work,issues)
    const payload={feeling,work,issues};
    console.log(payload);
    axios.post("http://localhost:8080/meditation",payload)
    .then((res)=>{
        // console.log(res)
        setResult(res.data.generatedText)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <Box id="meditationDiv">
      {/* <Heading as='h2' size='2xl'>
    (2xl) In love with React & Next
  </Heading> */}
      <Heading fontSize={["35px", "55px"]} fontWeight="bold" id="medTitle" onClick={()=>window.location.reload()}>
        Meditator
      </Heading>
      <Text fontSize={["35px", "40px"]} fontWeight="" id="medTitle" textColor="#3b82f6">
      Let's meditate!
      </Text>
      {!result&&<Stepper size="lg" colorScheme="yellow" index={current} id="stepper">
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
      </Stepper>}
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
              onClick={() => {
                if(feeling==""){
                    alert("Please enter your feelings using input box!");
                }else{
                    setCurrent((prev) => prev + 1)
                }
              }}
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
              onClick={() => {
                if(work==""){
                    alert("Please enter the work you do using input box!");
                }else{
                    setCurrent((prev) => prev + 1)
                }
              }}
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
              onClick={() => {
                if(issues==""){
                    alert("Please enter your issues using input box!");
                }else{
                    setCurrent((prev) => prev + 1)
                    getMeditationData();
                }
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
      {result&&<Text fontSize={["25px", "30px"]} textAlign="left">
        {result}
        </Text>}
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
