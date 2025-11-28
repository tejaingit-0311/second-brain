import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 3000;
//middleware:
app.use(express.json());
//app-router:
app.use('/user', router);


//connect to db:
async function connectToDB() {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect("mongodb+srv://tejaworks03:root@cluster0.tiotpwp.mongodb.net/brainly");
  } catch (error) {
    console.error(`Error Occured while connecting to DB ${error}`);
  }
}

connectToDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
