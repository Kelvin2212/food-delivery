import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kelvinsamuel:Kelvinsamuel7@cluster0.m7alv2g.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
