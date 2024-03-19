import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  database: "world",
  host: "localhost",
  password: "123456",
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const checkVisited = async () => {
  
    const result = await db.query("SELECT country_code from visited_countries");
    const countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });
    console.log(result.rows);
    return countries;
};

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req,res) => {
  const input  = req.body["country"];
  try
  {
    const result = await db.query("SELECT country_code from countries WHERE LOWER(country_name) LIKE '%'|| $1 || '%' ", [input.toLowerCase()]);
    const data = result.rows[0];
    const code = data.country_code;
    try
    {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [code,]);
      res.redirect("/");
    }catch(err)
    {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", { 
        countries:countries, 
        total: countries.length,
        error: "Country has already been added, try different",
      });
    }
  }catch(err)
  {
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", { 
      countries:countries, 
      total: countries.length,
      error: "COuntry you Visited doesnot exists, be carefel where you go"
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
