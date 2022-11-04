const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("Bye there! see you soon ...");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
