
const express = require('express');
const { port } = require('./config.json');
const data = require("./DummyData");

const app = express();

app.get('/data', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: data })
});

app.listen(port, () => console.log(`server is listening on: ${port}`));

app.post(`/item`, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let details = req.body;
  if (!details)
      return {
          status: "404",
          message: "Details Required to create a listing",
      };

  let item = {
    id: data.length,
    isFeatured: true,
    isCompleted: false,
    taskTitle: "Cook",
    taskDescription: "Cook a breakfast with my friends",
    taskLocation: arr[0].HOME,
    maxTime: "02/10/2021",
    taskDuration: "1",
    urgencyLevel: arr[1].LOW,
    taskAssigned: [arr[2].YARDEN, arr[2].RAZ, arr[2].NAAMA],
  };

  data.push(item);
  res.json({ status: 200, message: "Listing Created", data: item });
});