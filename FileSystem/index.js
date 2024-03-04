const fs = require("fs");


// Creating File 

// fs.writeFile("message.txt", "hello World", (err) => {
//     if(err) throw err;
//     console.log(("the file is saved succesfully"))
// } );

// Reading the File
fs.readFile("./message.txt" , "utf-8" ,(err,data) => {
    if(err) throw err;
    console.log(data)
} );