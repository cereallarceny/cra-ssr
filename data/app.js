/*jslint nodejs: true*/

"use strict";

var express = require("express"),
  cors = require("cors"),
  port = process.env.PORT || 8000,
  app = express();
app.use(cors());

app.get("/data/profile/:id", (req, res) => {
  res.sendFile(__dirname + "/profile/" + req.params.id + ".json");
});

app.listen(port, function() {
  console.log("Express server listening on port " + port + ".");
});
