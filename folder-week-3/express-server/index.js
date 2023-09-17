const express = require("express");
//import Express into  project so you can use it. Each time you add a package to your project, you need to import it where you want to use it.
const app = express();
//call the express function, which creates a new application and then assigns the result to the app constant.
app.set("view engine", "pug");

// tell Express which template engine to use. Express will look in a folder called Views in the root of your project.
app.use(express.static("public"));

//
app.get("/", (req, res) => {
  res.send("Hello stranger!");
});

app.get("/getData", (req, res) => {
  if (req.query.number === undefined || req.query.number === "") {
    res.send("Lack of Parameter");
  }
  const number = Number(req.query.number);
  if (number > 0) {
    let sum = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    res.send(`The sum of numbers from 1 to ${number} is ${sum}`);
  } else {
    res.send("Wrong Parameter");
  }
});

//Create routes and listen on a specific port

app.listen(3000, () => {
  console.log("cool! keep happy coding!");
});
//The last step for the server to work is to set up a listener.  set a specific port for the application.
//at the end of your JavaScript file.
