import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 3 - Make the styling show up.
//Hint 1: CSS files are static files!
//Hint 2: The header and footer are partials.
//Hint 3: Add the CSS link in header.ejs

//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  //Step 2 - Make the generate name functionality work
  //Hint: When the "Generate Name" button in index.ejs is clicked, it should hit up this route.
  //Then:
  //1. You should randomly pick an adjective from the const "adj" and a noun from const "noun",
  //scroll down to see the two arrays.
  //2. Send the index.ejs as a response and add the adjective and noun to the res.render
  //3. Test to make sure that the random words display in the h1 element in index.ejs
  const randomAdj = adj[Math.floor(Math.random()*adj.length)];
  const randomNoun = noun[Math.floor(Math.random()*noun.length)];

  res.render("index.ejs", {
    adjective : randomAdj,
    noun : randomNoun
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  
  "winding",
  "windy",
  "winged",
  "wiry",
  "wise",
  "witty",
  "wobbly",
  "woeful",
  "wonderful",
  "wooden",
  "woozy",
  "wordy",
  "worldly",
  "worn",
  "worried",
  "worrisome",
  "worse",
  "worst",
  "worthless",
  "worthwhile",
  "worthy",
  "wrathful",
  "wretched",
  "writhing",
  "wrong",
  "wry",
  "yawning",
  "yearly",
  "yellow",
  "yellowish",
  "young",
  "youthful",
  "yummy",
  "zany",
  "zealous",
  "zesty",
  "zigzag",
];

const noun = [
  
  "wilderness",
  "will",
  "william",
  "willow",
  "wind",
  "windage",
  "wind-chime",
  "window",
  "windscreen",
  "windshield",
  "wine",
  "wing",
  "wingman",
  "wingtip",
  "winter",
  "wire",
  "wiseguy",
  "wish",
  "wisteria",
  "witch",
  "witch-hunt",
  "withdrawal",
  "witness",
  "wolf",
  "woman",
  "wombat",
  "women",
  "wood",
  "woodland",
  "woodshed",
  "woodwind",
  "wool",
  "woolen",
  "word",
  "work",
  "workbench",
  "worker",
  "workhorse",
  "worklife",
  "workshop",
  "world",
  "worm",
  "worthy",
  "wound",
  "wrap",
  "wraparound",
  "wrecker",
  "wren",
  "wrench",
  "wrestler",
  "wrinkle",
  "wrist",
  "writer",
  "writing",
  "wrong",
  "xylophone",
  "yacht",
  "yak",
  "yam",
  "yard",
  "yarmulke",
  "yarn",
  "yawl",
  "year",
  "yellow",
  "yesterday",
  "yew",
  "yin",
  "yogurt",
  "yoke",
  "young",
  "youth",
  "yugoslavian",
  "yurt",
  "zampone",
  "zebra",
  "zebrafish",
  "zephyr",
  "ziggurat",
  "zinc",
  "zipper",
  "zither",
  "zone",
  "zoo",
  "zoologist",
  "zoology",
  "zoot-suit",
  "zucchini",
];
