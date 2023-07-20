const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");
app.use(cors());

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to App");
});

app.get("/meditation", (req, res) => {
    console.log(req)
  let payload = {
    usecase: "GPT_MEDITATION_CREATOR",
    userInput:
      "feeling sad right now, they currently are developers and facing sleeping issues today",
  };
  try{
      axios.post("https://gpt-api.richexplorer.com/api/general", payload)
        .then((data) => {
          res.send(data.data);
        })
        .catch((err) => {
          console.log(err)
          res.send("Something went wrong");
        });
  }
  catch{
    res.send("Something went wrong")
  }
});

app.listen(process.env.port, async () => {
  try {
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Something went wrong");
  }
});
