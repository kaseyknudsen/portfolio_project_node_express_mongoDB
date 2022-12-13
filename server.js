const express = require("express");
const morgan = require("morgan");
const homePageRouter = require("./routes/homePageRouter");
const contactMeRouter = require("./routes/contactMeRouter")
const earTrainingRouter = require("./routes/earTrainingRouter")
const practiceRoutinesRouter = require("./routes/practiceRoutinesRouter")
const repertoireRouter = require("./routes/repertoireRouter")
const theoryRouter = require("./routes/theoryRouter")

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/homepage", homePageRouter);
app.use("/contactme", contactMeRouter)
app.use("/eartraining", earTrainingRouter)
app.use("/practiceroutines", practiceRoutinesRouter)
app.use("/repertoire", repertoireRouter)
app.use("/theory", theoryRouter)

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running and http://${hostname}:${port}`);
});
