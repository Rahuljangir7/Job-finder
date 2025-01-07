import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connection is SuccessFull`);
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
