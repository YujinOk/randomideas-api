const express = require("express");
const port = 5500;
const app = express();



app.get("/", (req, res) => {
  res.send({ message: "Welcome to teh RandomIdeas API" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);
app.listen(port, () => console.log(`Server listening on port ${port}`));
