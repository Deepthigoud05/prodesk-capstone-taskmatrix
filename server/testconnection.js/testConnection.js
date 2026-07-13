const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://gd239989_db_user:Deepthi5114@cluster0.hrclibj.mongodb.net/taskmatrix?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Connection Error:");
    console.error(err);
    process.exit(1);
  });