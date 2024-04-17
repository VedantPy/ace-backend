import connectDB from "./db/index.js";
import {app} from "./app.js";

connectDB()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
})
.catch((err)=>{
  console.log("MongoDB connection error: ", err.message)
});









//  Another noob approach
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (e) => {
      console.log("ERROR: ", e);
      throw e;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/