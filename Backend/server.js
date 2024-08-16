const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server...");
});

app.use("/get", require("./routes/routes"));
app.listen(5000, () => console.log("server is running..."));
