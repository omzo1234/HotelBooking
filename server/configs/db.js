import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connect', ()=> console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/Hotel-booking`)
    } catch (error) {
       console.log(error.message);
    }
}
export default connectDB; 