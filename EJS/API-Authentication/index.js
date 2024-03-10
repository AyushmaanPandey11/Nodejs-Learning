import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "michaelscott";
const yourPassword = "that'swhatshesaid";
const yourAPIKey = "6a11ca69-721c-45ea-8e23-97dd557e7775";
const yourBearerToken = "27e94e1d-2851-451d-973e-75e1b661e4f9";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try
  {
    const response = await axios.get(API_URL+"random");
    res.render("index.ejs", {content:JSON.stringify(response.data)});
  }
  catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
    try
    {
      const response = await axios.get(API_URL+"all?page=2", {
        auth: {
            username : yourUsername,
            password: yourPassword,
        }
      } );
      res.render("index.ejs", { content: JSON.stringify(response.data) });
    }
    catch(error)
    {
      res.status(404).send(error.message);
    }

});

app.get("/apiKey", async (req, res) => {
  try
  {
    const response = await axios.get(API_URL+"filter", {
      params:{
        score:5,
        apiKey:yourAPIKey,
      }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) } );
  }
  catch(error)
  {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try
  {
    const response = await axios.get(API_URL+"secrets/42",{
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      }
    });
    res.render("index.ejs", { content : JSON.stringify(response.data) } );
  }
  catch(error)
  {
    res.status(404).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
