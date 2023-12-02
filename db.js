import mongoose from "mongoose";
 
const URI = process.env.MONGO_URI

const connetDB = async () => {
 await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 });
 console.log("DB connected successfuly.....")
}

export default connetDB;


// umarkhan71711

// zaPL79YRbqHaTYiP