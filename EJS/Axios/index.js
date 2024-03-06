import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  // gives the use input from select options
  console.log(req.body.participants);
  console.log(req.body.type);
  try
  {
    const participants = req.body.participants;
    const type = req.body.type;
    const response = await axios(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    const result = response.data;
    res.render("index.ejs", { data : result[Math.floor(Math.random()*result.length)] })
  }
  catch(error)
  {
    console.log(error.message);
    res.render("index.ejs", { error : "No activities that match your criteria." })
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
