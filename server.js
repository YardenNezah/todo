
const express = require('express');
const { port } = require('./config.json');
const data = require("./DummyData");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  console.log("getdata");
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: data })
});

app.listen(port, () => console.log(`server is listening on: ${port}`));

app.post(`/item`, (req, res) => {
  console.log("createItem " + req.body);
  res.header("Access-Control-Allow-Origin", "*");
  let details = req.body;
  console.log(!details);
  if (!details) {
      res.status(404);
      res.send({
        status: "404",
        message: "Details Required to create a task",
    }); 
  }
  let item = {
    id: data.length,
    isFeatured: details.isFeatured || "",
    isCompleted: false,
    taskTitle: details.taskTitle || "",
    taskDescription: details.taskDescription || "",
    taskLocation: details.taskLocation || "",
    maxTime: details.maxTime || "",
    taskDuration: details.taskDuration || "",
    urgencyLevel: details.urgencyLevel || "",
    taskAssigned: details.taskAssigned || "",
};

  data.push(item);
  res.send();
});