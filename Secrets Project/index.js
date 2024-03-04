//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express  from "express";
import {dirname} from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
var isAuthorised = false;
//middleware
app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req,res,next) 
{
    const password = req.body["password"];
    if( password === "ILoveProgramming" )
    {
        isAuthorised=true;
    }
    next();
}
app.use(passwordCheck);

app.get("/" , (req,res) => {
    res.sendFile( __dirname + "/public/index.html" );
} )

app.post("/check", (req,res) => {
    if( isAuthorised )
    {
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.redirect();
    }
} )

app.listen(3000, () => {
    console.log(` Listening on port ${port} `);
} )