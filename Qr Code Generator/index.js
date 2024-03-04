import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";



inquirer.
// question , input from user will be stored as name
prompt([
    {
        message : "Type your url for qr code ",
        name : "URL"
    },
]).
//response from user as answer
then((answer) => {
    const url = answer.URL;
    var qr_img = qr.image(url);
    // creates a png image from the qr_img
    qr_img.pipe(fs.createWriteStream("qr_img.png"));
}).
catch((error) => {
    if (error.isTtyError) {
      console.log("Invalid Url");
    } else {
      // Something else went wrong
    }
});