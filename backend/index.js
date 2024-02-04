const express = require("express");
const app = express();
const route = require("./routes/route");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

app.listen(port, () => {
  console.log(`The server is running on the port ${port}`);
});
