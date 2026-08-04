// 1) create server instance
const express = require("express");
const authRouter = require("./routes/auth.route");
// req in app to store token in cookie
const cookieParser = require("cookie-parser");
const userModel = require("./model/user.model");

// calling server
const app = express();

app.use(express.json());
app.use("/api/auth", authRouter); // auth api prefix for register, login, proteced api
app.use(cookieParser());

app.post("/api/note", async (req, res) => {
  const { title, description } = req.body;
  const note = await userModel.create({ title, description });
  res.status(200).json({
    message: "note is created.",
    note,
  });
});
app.get("/api/note", async (req, res) => {
  const notes = await userModel.find();
  res.status(201).json({
    message: "fetched all the notes",
    notes,
  });
});
app.patch("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  const note = await userModel.findByIdAndUpdate(id, { title });
  re.status(200).json({
    message: "note is updated",
    note,
  });
});
app.delete("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndDelete(id);
  res.status(204).json({
    message: "note is deleted ",
  });
});

app.use("*", (res) => {
  console.log(res.cookies);
  res.sendFile(path.join(__dirname, "..","/public/index.html"));
});

// export app to server.js
module.exports = app;
