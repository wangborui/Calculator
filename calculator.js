const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/bmicalculator",
  (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
  }
);

app.post("/bmicalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  res.send("Your BMI is: " + weight / (height * height));
  }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
