import express from "express";

const app = express();
app.listen(3000, ()=> {
    console.log("Hello");
});

app.get("/", (req,res) => {
    res.send("Hello World");
});
app.get("/about", (req,res) => {
    res.send("<h1>This Page is For express learning purposes</h1>");
});
