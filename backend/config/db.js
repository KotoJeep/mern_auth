import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo Connected: ${connect.connection.host}`)
    } catch (e) {
        console.error(`Error: ${e.message}`)
        process.exit(1)
    }
}
export default connectDB
