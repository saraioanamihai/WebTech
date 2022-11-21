const express = require("express");

const app = express();

app.get("http://server/ping", (req, res) => {
  res.send("pong");
});

app.listen(8080);
